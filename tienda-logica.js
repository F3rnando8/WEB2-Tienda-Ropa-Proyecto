
// 1. PROTECCIÓN Y VARIABLES GLOBALES
if (!localStorage.getItem('usuarioActivo')) {
    window.location.href = 'login.html';
}

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let productoTemporal = null; // Para guardar el producto que se abre en el modal
// 2. INICIO AL CARGAR LA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('product-container');
    const titulo = document.getElementById('main-title');
    
    // Carga inicial (Novedades)
    if (container && typeof productos !== 'undefined') {
        const destacados = productos.filter(p => p.coleccion === 'nuevos');
        titulo.textContent = "Novedades de la Semana";
        container.innerHTML = destacados.map(p => crearCardProducto(p)).join('');
    }

    actualizarContador();

    // Filtros de navegación lateral
    aplicarFiltro('.btn-categoria', 'categoria');
    aplicarFiltro('.btn-coleccion', 'coleccion');

    // Buscador
    const btnBuscar = document.getElementById('btn-buscar');
    const inputBuscar = document.getElementById('input-buscador');

    if (btnBuscar && inputBuscar) {
        const ejecutarBusqueda = () => {
            const termino = inputBuscar.value.toLowerCase().trim();
            if (!termino) return;
            const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(termino));
            titulo.textContent = `Resultados para: "${termino}"`;
            container.innerHTML = filtrados.length > 0 
                ? filtrados.map(p => crearCardProducto(p)).join('')
                : `<p style="grid-column:1/-1; text-align:center;">No se encontraron productos.</p>`;
        };

        btnBuscar.addEventListener('click', (e) => { e.preventDefault(); ejecutarBusqueda(); });
        inputBuscar.addEventListener('keydown', (e) => { if (e.key === 'Enter') ejecutarBusqueda(); });
    }

    // Carrito y Sesión
    const btnCarrito = document.getElementById('abrir-carrito');
    if (btnCarrito) btnCarrito.onclick = (e) => { e.preventDefault(); verPaginaCarrito(); };

    const emailSpan = document.getElementById('user-email');
    if (emailSpan) emailSpan.textContent = localStorage.getItem('usuarioActivo');

    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.onclick = () => {
            localStorage.clear();
            window.location.href = 'login.html';
        };
    }

    // Acordeones móviles
    document.querySelectorAll('.accordion').forEach(acc => {
        const header = acc.querySelector('.accordion-header');
        if (header) header.onclick = () => acc.classList.toggle('active');
    });
    // PERFIL - desplegable
    const btnProfile = document.getElementById('btn-profile');
    const dropdown = document.getElementById('profile-dropdown');

    if (btnProfile && dropdown) {
        btnProfile.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });
    }

    // Cerrar perfil al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.profile-menu')) {
            dropdown?.classList.remove('active');
        }
    });
        
});
// 3. FUNCIONES DE INTERFAZ Y FILTROS
function crearCardProducto(p) {
    return `
        <div class="product-card">
            <div class="card-image"><img src="${p.img}" alt="${p.nombre}"></div>
            <div class="card-content">
                <h4>${p.nombre}</h4>
                <p>${p.precio.toFixed(2)} BS</p>
                <button class="buy-button" onclick="abrirModalDetalle(${p.id})">Ver Detalle</button>
                <button class="share-button" data-nombre="${p.nombre}" data-id="${p.id}">
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
        </div>
    `;
}

function aplicarFiltro(selector, propiedad) {
    const botones = document.querySelectorAll(selector);
    botones.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (document.querySelector('.carrito-container-page')) {
                location.reload();
                return;
            }
            const valor = btn.getAttribute(`data-${propiedad}`);
            const filtrados = productos.filter(p => p[propiedad] === valor);
            document.getElementById('main-title').textContent = valor.toUpperCase();
            document.getElementById('product-container').innerHTML = filtrados.map(p => crearCardProducto(p)).join('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}
// 4. LÓGICA DEL MODAL DE PRODUCTO
function abrirModalDetalle(id) {
    const p = productos.find(prod => prod.id === id);
    if (!p) return;
    productoTemporal = p;

    document.getElementById('det-nombre').textContent = p.nombre;
    document.getElementById('det-precio').textContent = `${p.precio.toFixed(2)}`;
    document.getElementById('det-descripcion').textContent = p.descripcion;
    document.getElementById('det-img-1').src = p.img;
    document.getElementById('det-img-2').src = (p.imgsExtra && p.imgsExtra[1]) ? p.imgsExtra[1] : p.img;

    const containerTallas = document.getElementById('det-talla-container');
    document.getElementById('talla-seleccionada-input').value = ""; 
    containerTallas.innerHTML = p.tallas.map(t => 
        `<button type="button" class="talla-chip" onclick="seleccionarTalla(this, '${t}')">${t}</button>`
    ).join('');

    document.getElementById('modal-detalle-prod').style.display = 'flex';
}

function seleccionarTalla(elemento, valor) {
    document.querySelectorAll('.talla-chip').forEach(btn => btn.classList.remove('active'));
    elemento.classList.add('active');
    document.getElementById('talla-seleccionada-input').value = valor;
}

function cerrarModalDetalle() {
    document.getElementById('modal-detalle-prod').style.display = 'none';
}

// Evento único para el botón de confirmar compra dentro del modal
document.getElementById('btn-confirmar-compra').onclick = () => {
    const talla = document.getElementById('talla-seleccionada-input').value;
    if (!talla) {
        alert("Por favor, selecciona una talla.");
        return;
    }

    const item = { ...productoTemporal, tallaSeleccionada: talla, cantidad: 1 };
    const existe = carrito.find(p => p.id === item.id && p.tallaSeleccionada === talla);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push(item);
    }

    guardarYActualizar();
    cerrarModalDetalle();
    mostrarNotificacion(`${item.nombre} (Talla ${talla})`);
};
// 5. GESTIÓN DEL CARRITO
function guardarYActualizar() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
}

function actualizarContador() {
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = total;
}

function mostrarNotificacion(nombre) {
    const toast = document.createElement('div');
    toast.className = 'toast-exito';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${nombre} añadido correctamente`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

function eliminarDelCarrito(id, talla) {
    carrito = carrito.filter(item => !(item.id === id && item.tallaSeleccionada === talla));
    guardarYActualizar();
    verPaginaCarrito();
}

function cambiarCantidad(id, talla, cambio) {
    const item = carrito.find(p => p.id === id && p.tallaSeleccionada === talla);
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) eliminarDelCarrito(id, talla);
        else {
            guardarYActualizar();
            verPaginaCarrito();
        }
    }
}
// 6. VISTA DE CARRITO Y FACTURACIÓN
function verPaginaCarrito() {
    const mainArticle = document.querySelector('.main article');
    const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    
    let html = `
        <div class="carrito-container-page">
            <div class="carrito-header-flex">
                <h2><i class="fas fa-shopping-cart"></i> Carrito</h2>
                <button class="btn-cerrar-vista" onclick="location.reload()">&times;</button>
            </div>
    `;

    if (carrito.length === 0) {
        html += `<div class="carrito-vacio"><p>Tu carrito está vacío.</p><button class="btn-success" onclick="location.reload()">Volver a la tienda</button></div>`;
    } else {
        html += `
            <table class="tabla-carrito-pro">
                <thead>
                    <tr><th>Producto</th><th>Talla</th><th>Precio</th><th>Cant.</th><th>Subtotal</th><th></th></tr>
                </thead>
                <tbody>
                ${carrito.map(item => `
                    <tr>
                        <td><div class="celda-producto"><img src="${item.img}"> <span>${item.nombre}</span></div></td>
                        <td>${item.tallaSeleccionada}</td>
                        <td>${item.precio.toFixed(2)} BS</td>
                        <td>
                            <div class="controles-cantidad">
                                <button onclick="cambiarCantidad(${item.id}, '${item.tallaSeleccionada}', -1)">-</button>
                                <span>${item.cantidad}</span>
                                <button onclick="cambiarCantidad(${item.id}, '${item.tallaSeleccionada}', 1)">+</button>
                            </div>
                        </td>
                        <td>${(item.precio * item.cantidad).toFixed(2)} BS</td>
                        <td><button class="btn-eliminar-pro" onclick="eliminarDelCarrito(${item.id}, '${item.tallaSeleccionada}')"><i class="fas fa-trash"></i></button></td>
                    </tr>
                `).join('')}
                </tbody>
            </table>
            <div class="carrito-resumen-pro">
                <h3>Total: ${total.toFixed(2)} BS</h3>
                <div class="resumen-botones">
                    <button class="btn-danger" onclick="vaciarCarrito()">Vaciar</button>
                    <button class="btn-finalizar" onclick="generarFactura()">Finalizar Compra</button>
                </div>
            </div>`;
    }
    mainArticle.innerHTML = html + `</div>`;
}

function vaciarCarrito() {
    const modal = document.getElementById('modal-confirmacion');
    modal.style.display = 'flex';
    document.getElementById('confirmar-si').onclick = () => {
        carrito = [];
        guardarYActualizar();
        location.reload();
    };
    document.getElementById('confirmar-no').onclick = () => modal.style.display = 'none';
}

// 6. FACTURACIÓN PDF (VERSIÓN CORREGIDA)

function generarFactura() {
    const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const numOrden = `ORD-${Math.floor(Math.random()*9000+1000)}`;
    const usuario = localStorage.getItem('usuarioActivo') || 'Cliente';

    const modalFactura = document.createElement('div');
    modalFactura.id = "modal-factura-overlay";
    modalFactura.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:10000; display:flex; justify-content:center; align-items:flex-start; padding:20px; overflow-y:auto; backdrop-filter:blur(5px);";

    modalFactura.innerHTML = `
        <div id="factura-print" style="background:white; width:100%; max-width:800px; padding:40px; color:#333; font-family:Arial, sans-serif; border-radius:8px;">
            <div style="border-bottom:4px solid #3498db; padding-bottom:20px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h1 style="margin:0; color:#2c3e50; font-size:28px;">Unique Fashion</h1>
                    <p style="margin:5px 0; color:#7f8c8d;">Tienda Exclusiva de Moda</p>
                </div>
                <div style="text-align:right">
                    <h2 style="margin:0; color:#3498db;">${numOrden}</h2>
                    <p style="margin:5px 0;">Fecha: ${new Date().toLocaleDateString()}</p>
                </div>
            </div>

            <div style="margin-bottom:30px;">
                <p style="margin:0; font-size:12px; color:#7f8c8d; text-transform:uppercase;">Cliente:</p>
                <p style="margin:5px 0; font-size:18px; font-weight:bold;">${usuario}</p>
            </div>

            <table style="width:100%; border-collapse:collapse; margin-bottom:30px;">
                <thead>
                    <tr style="background:#f8f9fa; border-bottom:2px solid #3498db;">
                        <th style="text-align:left; padding:15px;">Producto / Talla</th>
                        <th style="text-align:center; padding:15px;">Cant.</th>
                        <th style="text-align:right; padding:15px;">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                ${carrito.map(item => `
                    <tr style="border-bottom:1px solid #eee;">
                        <td style="padding:15px;">
                            <span style="font-weight:bold; display:block;">${item.nombre}</span>
                            <small style="color:#666;">Talla: ${item.tallaSeleccionada}</small>
                        </td>
                        <td style="text-align:center; padding:15px;">${item.cantidad}</td>
                        <td style="text-align:right; padding:15px; font-weight:bold;">${(item.precio * item.cantidad).toFixed(2)} BS</td>
                    </tr>
                `).join('')}
                </tbody>
            </table>

            <div style="text-align:right; margin-top:20px; padding-top:20px; border-top:2px solid #2c3e50;">
                <p style="margin:0; font-size:14px;">Total a pagar:</p>
                <h2 style="margin:5px 0; font-size:32px; color:#2c3e50;">${total.toFixed(2)} BS</h2>
            </div>

            <div id="controles-factura" style="margin-top:30px; display:flex; gap:10px; justify-content:center;">
                <button id="btn-pdf-descargar" style="padding:12px 25px; background:#3498db; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Descargar PDF</button>
                <button id="btn-pdf-cerrar" style="padding:12px 25px; background:#e74c3c; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Cerrar</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modalFactura);
    document.getElementById('btn-pdf-cerrar').onclick = () => {
        modalFactura.remove(); 
    };

    // Botón Descargar
    document.getElementById('btn-pdf-descargar').onclick = function() {
        const elemento = document.getElementById('factura-print');
        const controles = document.getElementById('controles-factura');
        
        controles.style.opacity = '0';

        const opciones = {
            margin: [10, 10, 10, 10],
            filename: `Factura_${numOrden}.pdf`,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { 
                scale: 2, 
                useCORS: true, 
                letterRendering: true,
                scrollY: 0 
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opciones).from(elemento).save().then(() => {
            controles.style.opacity = '1';
        }).catch(err => {
            console.error("Error al generar PDF:", err);
            controles.style.opacity = '1';
        });
    };
}
// 7. COMPARTIR Y EVENTOS DE CIERRE
document.addEventListener('click', (e) => {
    const btnShare = e.target.closest('.share-button');
    if (!btnShare) return;

    const nombre = btnShare.dataset.nombre;
    const url = window.location.href;

    document.getElementById('share-whatsapp').href = `https://wa.me/?text=${encodeURIComponent(nombre + ' ' + url)}`;
    document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(nombre)}&url=${encodeURIComponent(url)}`;
    document.getElementById('modal-compartir').style.display = 'flex';
});

document.getElementById('cerrar-compartir').onclick = () => document.getElementById('modal-compartir').style.display = 'none';

// Clic fuera del modal para cerrar
window.onclick = (e) => {
    if (e.target.id === 'modal-detalle-prod') cerrarModalDetalle();
    if (e.target.id === 'modal-compartir') document.getElementById('modal-compartir').style.display = 'none';
    if (e.target.id === 'modal-confirmacion') document.getElementById('modal-confirmacion').style.display = 'none';
};

// Tecla ESC para cerrar todo
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        cerrarModalDetalle();
        document.getElementById('modal-compartir').style.display = 'none';
        document.getElementById('modal-confirmacion').style.display = 'none';
        if(document.getElementById('modal-factura-overlay')) document.getElementById('modal-factura-overlay').remove();
    }
});