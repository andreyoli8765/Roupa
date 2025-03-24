// Banco de dados de produtos
const productDatabase = [
    {
        id: 1,
        name: "Camisa Listrada 100% algodão",
        category: "masculino",
        price: 70,
        oldPrice: 90,
        description: "Blazer executivo feminino confeccionado em tecido premium com acabamento de alta qualidade. Perfeito para o ambiente corporativo, oferecendo elegância e conforto para o dia a dia profissional.",
        rating: 4.5,
        reviews: 24,
        image: "Imagens/1 listrada (6).jpg",
        tag: "Novo",
        sizes: ["PP", "P", "M", "G", "GG"],
        colors: ["Preto", "Azul Marinho", "Cinza"],
        stock: 15
    },
    {
        id: 2,
        name: "Camisa Listrada 100% algodão",
        category: "masculino",
        price: 70,
        oldPrice: 90,
        description: "Terno slim fit masculino com corte moderno e elegante. Produzido com tecidos importados que garantem conforto e durabilidade, ideal para executivos que buscam um visual contemporâneo.",
        rating: 5.0,
        reviews: 42,
        image: "Imagens/1 listrada (5).jpg",
        tag: "-15%",
        sizes: ["P", "M", "G", "GG", "XG"],
        colors: ["Preto", "Azul Marinho", "Cinza Chumbo"],
        stock: 10
    },
    {
        id: 4,
        name: "Camisa Listrada 100% algodão",
        category: "masculino",
        price: 90,
        oldPrice: null,
        description: "Camisa social masculina premium com tecido anti-amassamento. Corte moderno e ajuste perfeito ao corpo, ideal para homens que buscam elegância com conforto.",
        rating: 3.5,
        reviews: 31,
        image: "Imagens/1 listrada (3).jpg",
        tag: "Destaque",
        sizes: ["P", "M", "G", "GG"],
        colors: ["Branco", "Azul Claro", "Azul Listrado", "Branco Listrado"],
        stock: 25
    },
    {
        id: 5,
        name: "Camisa Listrada 100% algodão",
        category: "masculino",
        price: 90,
        oldPrice: null,
        description: "Gravata confeccionada em seda italiana de alta qualidade. Design elegante e atemporal que complementa qualquer traje social ou executivo.",
        rating: 5.0,
        reviews: 56,
        image: "Imagens/1 listrada (2).jpg",
        tag: null,
        sizes: ["Único"],
        colors: ["Vermelho", "Azul", "Preto", "Bordô", "Listrado"],
        stock: 30
    },
    {
        id: 6,
        name: "Camisa Listrada 100% algodão",
        category: "masculino",
        price: 90,
        oldPrice: null,
        description: "Bolsa executiva feminina produzida em couro legítimo, com compartimentos internos organizados para notebooks, documentos e objetos pessoais. Elegância e praticidade para o dia a dia.",
        rating: 4.0,
        reviews: 12,
        image: "Imagens/1 listrada.jpg",
        tag: "Novo",
        sizes: ["Único"],
        colors: ["Preto", "Marrom", "Caramelo"],
        stock: 8
    },
    {
        id: 6,
        name: "Camisa Basica",
        category: "masculino",
        price: 90,
        oldPrice: null,
        description: "Bolsa executiva feminina produzida em couro legítimo, com compartimentos internos organizados para notebooks, documentos e objetos pessoais. Elegância e praticidade para o dia a dia.",
        rating: 4.0,
        reviews: 12,
        image: "Imagens/1 azul (2).jpg",
        tag: "Novo",
        sizes: ["Único"],
        colors: ["Preto", "Marrom", "Caramelo"],
        stock: 8
    },
    {
        id: 6,
        name: "Camisa Basica",
        category: "masculino",
        price: 90,
        oldPrice: null,
        description: "Bolsa executiva feminina produzida em couro legítimo, com compartimentos internos organizados para notebooks, documentos e objetos pessoais. Elegância e praticidade para o dia a dia.",
        rating: 4.0,
        reviews: 12,
        image: "Imagens/1 verde (1).jpg",
        tag: "Novo",
        sizes: ["Único"],
        colors: ["Preto", "Marrom", "Caramelo"],
        stock: 8
    },
    {
        id: 6,
        name: "Bone Word Class",
        category: "acessorios",
        price: 429.90,
        oldPrice: null,
        description: "Bolsa executiva feminina produzida em couro legítimo, com compartimentos internos organizados para notebooks, documentos e objetos pessoais. Elegância e praticidade para o dia a dia.",
        rating: 4.0,
        reviews: 12,
        image: "Imagens/bone1.jpg",
        tag: "Novo",
        sizes: ["Único"],
        colors: ["Preto", "Marrom", "Caramelo"],
        stock: 8
    },
    {
        id: 6,
        name: "Bone Word Class",
        category: "acessorios",
        price: 429.90,
        oldPrice: null,
        description: "Bolsa executiva feminina produzida em couro legítimo, com compartimentos internos organizados para notebooks, documentos e objetos pessoais. Elegância e praticidade para o dia a dia.",
        rating: 4.0,
        reviews: 12,
        image: "Imagens/bone2.jpg",
        tag: "Novo",
        sizes: ["Único"],
        colors: ["Preto", "Marrom", "Caramelo"],
        stock: 8
    },
    {
        id: 6,
        name: "Bone Word Class",
        category: "acessorios",
        price: 429.90,
        oldPrice: null,
        description: "Bolsa executiva feminina produzida em couro legítimo, com compartimentos internos organizados para notebooks, documentos e objetos pessoais. Elegância e praticidade para o dia a dia.",
        rating: 4.0,
        reviews: 12,
        image: "Imagens/bone3.jpg",
        tag: "Novo",
        sizes: ["Único"],
        colors: ["Preto", "Marrom", "Caramelo"],
        stock: 8
    },
    {
        id: 6,
        name: "Bone Word Class",
        category: "acessorios",
        price: 429.90,
        oldPrice: null,
        description: "Bolsa executiva feminina produzida em couro legítimo, com compartimentos internos organizados para notebooks, documentos e objetos pessoais. Elegância e praticidade para o dia a dia.",
        rating: 4.0,
        reviews: 12,
        image: "Imagens/bone4.jpg",
        tag: "Novo",
        sizes: ["Único"],
        colors: ["Preto", "Marrom", "Caramelo"],
        stock: 8
    }
];

// Banco de dados de imagens para os banners e backgrounds
const imageDatabase = {
    banners: {
       hero: "Imagens/wortec 2.png",
       newsletter: "Imagens/wortec 2.png"
       
    },
    featured: {
        large: "images/destaque-grande.jpg",
        small1: "images/destaque-pequeno1.jpg",
        small2: "images/destaque-pequeno2.jpg"
    },
    about: "images/sobre-empresa.jpg",
    testimonials: [
        "images/cliente1.jpg",
        "images/cliente2.jpg",
        "images/cliente3.jpg"
    ]
};

// Banco de dados para armazenar o carrinho de compras
let cartDatabase = {
    items: [],
    total: 0,
    count: 0
};

// Banco de dados para armazenar a lista de desejos
let wishlistDatabase = {
    items: [],
    total: 0,
    count: 0
};

// Carregar carrinho do localStorage se existir
function loadCart() {
    const savedCart = localStorage.getItem('eleganceCart');
    if (savedCart) {
        cartDatabase = JSON.parse(savedCart);
        updateCartIcon();
    }
}

// Salvar carrinho no localStorage
function saveCart() {
    localStorage.setItem('eleganceCart', JSON.stringify(cartDatabase));
    updateCartIcon();
}

// Atualizar o ícone do carrinho
function updateCartIcon() {
    const cartCount = document.querySelector('.cart a span');
    if (cartCount) {
        cartCount.textContent = cartDatabase.count;
    }
}

// Carregar lista de desejos do localStorage se existir
function loadWishlist() {
    const savedWishlist = localStorage.getItem('eleganceWishlist');
    if (savedWishlist) {
        wishlistDatabase = JSON.parse(savedWishlist);
    }
}

// Salvar lista de desejos no localStorage
function saveWishlist() {
    localStorage.setItem('eleganceWishlist', JSON.stringify(wishlistDatabase));
}

// Esperar o DOM ser carregado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const menu = document.querySelector('.menu');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const backToTop = document.querySelector('.back-to-top');
    
    // Carregar o carrinho existente
    loadCart();
    
    // Carregar a lista de desejos
    loadWishlist();
    
    // Renderizar produtos com dados do banco de dados
    renderProducts();
    
    // Aplicar imagens dos banners do banco de dados
    applyBackgroundImages();
    
    // Menu mobile
    mobileMenuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
        
        // Alterna o ícone do menu
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            const icon = mobileMenuIcon.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Inicializar página de carrinho se estiver na página de carrinho
    if (window.location.href.includes('carrinho.html')) {
        renderCartPage();
        renderRecommendedProducts();
    }
    
    // Inicializar página da lista de desejos se estiver na página
    if (window.location.href.includes('desejos.html')) {
        renderWishlistPage();
    }
    
    // Aplicar estilo inicial aos itens que já estão na lista de desejos
    document.querySelectorAll('.product-actions button:nth-child(1)').forEach(button => {
        const productId = parseInt(button.closest('.product-card')?.getAttribute('data-product-id'));
        if (productId && isInWishlist(productId)) {
            button.querySelector('i').style.color = 'red';
        }
    });
    
    // Adicionar link para lista de desejos no header
    const cartElement = document.querySelector('.cart');
    if (cartElement) {
        const wishlistLink = document.createElement('div');
        wishlistLink.className = 'wishlist';
        wishlistLink.innerHTML = '<a href="desejos.html"><i class="fas fa-heart"></i></a>';
        wishlistLink.style.marginRight = '15px';
        
        cartElement.parentNode.insertBefore(wishlistLink, cartElement);
    }
    
    // Sistema de filtragem de produtos
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove a classe active de todos os botões
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona a classe active ao botão clicado
            this.classList.add('active');
            
            // Obtém o valor do filtro
            const filterValue = this.getAttribute('data-filter');
            
            // Obtém todos os cartões de produto após a renderização
            const products = document.querySelectorAll('.product-card');
            
            // Filtra os produtos
            products.forEach(product => {
                if (filterValue === 'all' || product.getAttribute('data-category') === filterValue) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
    
    // Sistema de slide de depoimentos
    let currentSlide = 0;
    
    // Função para mostrar slide
    function showSlide(n) {
        // Esconde todos os slides
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove a classe active de todos os dots
        testimonialDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Mostra o slide atual
        testimonialSlides[n].classList.add('active');
        testimonialDots[n].classList.add('active');
    }
    
    // Função para avançar slide
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= testimonialSlides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }
    
    // Função para voltar slide
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = testimonialSlides.length - 1;
        }
        showSlide(currentSlide);
    }
    
    // Event listeners para os controles
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Event listeners para os dots
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto slide a cada 5 segundos
    setInterval(nextSlide, 5000);
    
    // Botão de "Voltar ao topo"
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Header fixo com efeito de shrink
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            header.style.height = '70px';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.height = '80px';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
        
        // Adiciona classe active ao link de menu correspondente à seção atual
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 10;
            const sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.menu a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de entrada dos elementos quando entrarem no viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .feature, .section-header, .about-content, .testimonial-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (elementPosition < screenPosition - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Aplica estilo inicial aos elementos que serão animados
    document.querySelectorAll('.product-card, .feature, .section-header, .about-content, .testimonial-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Executa a animação no carregamento e no scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Contador para estatísticas
    function countStats() {
        const stats = document.querySelectorAll('.stat h3');
        
        stats.forEach(stat => {
            const targetNumber = parseInt(stat.textContent);
            let currentNumber = 0;
            const duration = 2000; // duração em ms
            const increment = targetNumber / (duration / 16); // 60fps
            
            function updateCount() {
                currentNumber += increment;
                
                if (currentNumber < targetNumber) {
                    if (targetNumber > 1000) {
                        stat.textContent = Math.ceil(currentNumber / 1000) + 'k+';
                    } else {
                        stat.textContent = Math.ceil(currentNumber);
                    }
                    requestAnimationFrame(updateCount);
                } else {
                    if (targetNumber > 1000) {
                        stat.textContent = (targetNumber / 1000) + 'k+';
                    } else {
                        stat.textContent = targetNumber + '+';
                    }
                }
            }
            // Inicia o contador quando a seção estiver visível
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    updateCount();
                    observer.disconnect();
                }
            });
            
            observer.observe(stat);
        });
    }
    
    // Iniciar contador
    countStats();
    
    // Função para adicionar produto ao carrinho
    function addToCart(productId, quantity, size = null, color = null) {
        // Encontra o produto no banco de dados
        const product = productDatabase.find(p => p.id === productId);
        
        if (!product) {
            showNotification('Produto não encontrado!', 'error');
            return;
        }
        
        // Verifica se o produto já está no carrinho
        const existingItem = cartDatabase.items.find(item => 
            item.productId === productId && 
            item.size === size && 
            item.color === color
        );
        
        if (existingItem) {
            // Atualiza a quantidade se já existe
            existingItem.quantity += quantity;
            existingItem.total = existingItem.quantity * existingItem.price;
        } else {
            // Adiciona novo item
            cartDatabase.items.push({
                productId: productId,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
                size: size || (product.sizes.length > 0 ? product.sizes[0] : 'Único'),
                color: color || (product.colors.length > 0 ? product.colors[0] : 'Padrão'),
                total: product.price * quantity
            });
        }
        
        // Atualiza totais
        updateCartTotals();
        
        // Salva o carrinho
        saveCart();
        
        // Notifica o usuário
        showNotification(`${product.name} adicionado ao carrinho!`);
        
        // Efeito visual de animação no ícone do carrinho
        const cart = document.querySelector('.cart a i');
        cart.classList.add('fa-bounce');
        setTimeout(() => {
            cart.classList.remove('fa-bounce');
        }, 1000);
    }
    
    // Função para atualizar totais do carrinho
    function updateCartTotals() {
        cartDatabase.count = cartDatabase.items.reduce((sum, item) => sum + item.quantity, 0);
        cartDatabase.total = cartDatabase.items.reduce((sum, item) => sum + item.total, 0);
    }
    
    // Função para remover item do carrinho
    function removeFromCart(index) {
        cartDatabase.items.splice(index, 1);
        updateCartTotals();
        saveCart();
        
        // Se estiver na página do carrinho, atualiza a exibição
        if (window.location.href.includes('carrinho.html')) {
            renderCartPage();
        }
        
        showNotification('Item removido do carrinho!');
    }
    
    // Função para atualizar quantidade do item no carrinho
    function updateCartItemQuantity(index, quantity) {
        if (quantity <= 0) {
            removeFromCart(index);
            return;
        }
        
        const item = cartDatabase.items[index];
        item.quantity = quantity;
        item.total = item.price * quantity;
        
        updateCartTotals();
        saveCart();
        
        // Se estiver na página do carrinho, atualiza a exibição
        if (window.location.href.includes('carrinho.html')) {
            renderCartPage();
        }
    }
    
    // Função para renderizar produtos do banco de dados
    function renderProducts() {
        const productsContainer = document.querySelector('.products');
        
        if (!productsContainer) return;
        
        // Limpa o container
        productsContainer.innerHTML = '';
        
        // Renderiza cada produto
        productDatabase.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-category', product.category);
            productCard.setAttribute('data-product-id', product.id);
            
            // Configura o HTML do produto
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.tag ? `<div class="product-tag">${product.tag}</div>` : ''}
                    <div class="product-actions">
                        <button><i class="fas fa-heart ${isInWishlist(product.id) ? 'active' : ''}"></i></button>
                        <button><i class="fas fa-shopping-cart"></i></button>
                        <button><i class="fas fa-search"></i></button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-rating">
                        ${generateRatingStars(product.rating)}
                        <span>(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        ${product.oldPrice ? `<span class="old-price">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                        <span class="current-price">R$ ${product.price.toFixed(2)}</span>
                    </div>
                </div>
            `;
            
            // Adiciona o produto ao container
            productsContainer.appendChild(productCard);
            
            // Adiciona evento de clique para abrir modal
            productCard.querySelector('.product-actions button:nth-child(3)').addEventListener('click', (e) => {
                e.stopPropagation();
                openProductModal(product.id);
            });
            
            // Adiciona evento de clique para adicionar ao carrinho
            productCard.querySelector('.product-actions button:nth-child(2)').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product.id, 1);
            });
            
            // Adiciona evento de clique para favoritos
            productCard.querySelector('.product-actions button:nth-child(1)').addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(e.currentTarget);
            });
        });
    }
    
    // Função para gerar estrelas de avaliação
    function generateRatingStars(rating) {
        let stars = '';
        
        // Estrelas cheias
        for (let i = 1; i <= Math.floor(rating); i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        // Meia estrela
        if (rating % 1 !== 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Estrelas vazias
        for (let i = Math.ceil(rating); i < 5; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
    
    // Função para aplicar imagens de fundo
    function applyBackgroundImages() {
        // Banner principal
        const heroSection = document.querySelector('.hero');
        if (heroSection && imageDatabase.banners.hero) {
            heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imageDatabase.banners.hero}')`;
        }
        
        // Newsletter
        const newsletterSection = document.querySelector('.newsletter');
        if (newsletterSection && imageDatabase.banners.newsletter) {
            newsletterSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${imageDatabase.banners.newsletter}')`;
        }
        
        // Destaques
        const featuredImages = document.querySelectorAll('.featured-grid img');
        if (featuredImages.length >= 3) {
            featuredImages[0].src = imageDatabase.featured.large;
            featuredImages[1].src = imageDatabase.featured.small1;
            featuredImages[2].src = imageDatabase.featured.small2;
        }
        
        // Sobre
        const aboutImage = document.querySelector('.about-image img');
        if (aboutImage) {
            aboutImage.src = imageDatabase.about;
        }
        
        // Depoimentos
        const testimonialImages = document.querySelectorAll('.testimonial-image img');
        testimonialImages.forEach((img, index) => {
            if (imageDatabase.testimonials[index]) {
                img.src = imageDatabase.testimonials[index];
            }
        });
    }
    
    // Função para alternar favorito
    function toggleFavorite(button) {
        const productId = parseInt(button.closest('.product-card').getAttribute('data-product-id'));
        const icon = button.querySelector('i');
        
        const wasAdded = toggleWishlistItem(productId);
        
        if (wasAdded) {
            icon.style.color = 'red';
            
            // Obtém o produto pai
            const product = button.closest('.product-card');
            const productName = product.querySelector('h3').textContent;
            
            showNotification(`${productName} adicionado à lista de desejos!`);
        } else {
            icon.style.color = '';
            showNotification('Produto removido da lista de desejos!');
        }
    }
    
    // Criação do modal de produto
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="" alt="Produto">
                </div>
                <div class="modal-info">
                    <h2 class="modal-title"></h2>
                    <div class="modal-rating"></div>
                    <div class="modal-price"></div>
                    <p class="modal-description">Descrição detalhada do produto com informações sobre material, cuidados e detalhes de design.</p>
                    <div class="modal-sizes">
                        <h3>Tamanhos</h3>
                        <div class="size-options">
                            <button>P</button>
                            <button>M</button>
                            <button>G</button>
                            <button>GG</button>
                        </div>
                    </div>
                    <div class="modal-quantity">
                        <h3>Quantidade</h3>
                        <div class="quantity-selector">
                            <button class="quantity-decrease">-</button>
                            <input type="number" value="1" min="1" max="10">
                            <button class="quantity-increase">+</button>
                        </div>
                    </div>
                    <div class="modal-buttons">
                        <button class="btn add-to-cart-modal">Adicionar ao Carrinho</button>
                        <button class="btn-small wishlist-modal"><i class="fas fa-heart"></i> Adicionar à Lista de Desejos</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Estiliza o modal
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1001';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modal.style.overflow = 'auto';
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.margin = '5% auto';
    modalContent.style.padding = '20px';
    modalContent.style.width = '90%';
    modalContent.style.maxWidth = '1000px';
    modalContent.style.borderRadius = 'var(--border-radius)';
    modalContent.style.position = 'relative';
    
    const closeModal = modal.querySelector('.close-modal');
    closeModal.style.position = 'absolute';
    closeModal.style.right = '20px';
    closeModal.style.top = '10px';
    closeModal.style.fontSize = '28px';
    closeModal.style.fontWeight = 'bold';
    closeModal.style.cursor = 'pointer';
    
    const modalBody = modal.querySelector('.modal-body');
    modalBody.style.display = 'flex';
    modalBody.style.flexWrap = 'wrap';
    
    const modalImage = modal.querySelector('.modal-image');
    modalImage.style.flex = '1 1 400px';
    modalImage.style.padding = '20px';
    
    const modalInfo = modal.querySelector('.modal-info');
    modalInfo.style.flex = '1 1 500px';
    modalInfo.style.padding = '20px';
    
    // Função para abrir modal do produto
    function openProductModal(productId) {
        const product = productDatabase.find(p => p.id === productId);
        
        if (!product) {
            showNotification('Produto não encontrado!', 'error');
            return;
        }
        
        // Verifica se está na lista de desejos
        const inWishlist = isInWishlist(productId);
        
        // Preenche o modal com os dados do produto
        modal.querySelector('.modal-title').textContent = product.name;
        modal.querySelector('.modal-image img').src = product.image;
        modal.querySelector('.modal-rating').innerHTML = generateRatingStars(product.rating);
        
        // Preço
        let priceHtml = '';
        if (product.oldPrice) {
            priceHtml += `<span class="old-price">R$ ${product.oldPrice.toFixed(2)}</span>`;
        }
        priceHtml += `<span class="current-price">R$ ${product.price.toFixed(2)}</span>`;
        modal.querySelector('.modal-price').innerHTML = priceHtml;
        
        // Descrição
        modal.querySelector('.modal-description').textContent = product.description;
        
        // Tamanhos
        const sizeOptions = modal.querySelector('.size-options');
        sizeOptions.innerHTML = '';
        product.sizes.forEach(size => {
            const sizeBtn = document.createElement('button');
            sizeBtn.textContent = size;
            sizeBtn.dataset.size = size;
            sizeOptions.appendChild(sizeBtn);
        });
        
        // Cores (se o modal tiver essa seção)
        const colorSection = modal.querySelector('.modal-colors');
        if (colorSection) {
            const colorOptions = colorSection.querySelector('.color-options');
            colorOptions.innerHTML = '';
            product.colors.forEach(color => {
                const colorBtn = document.createElement('button');
                colorBtn.textContent = color;
                colorBtn.dataset.color = color;
                colorOptions.appendChild(colorBtn);
            });
        } else if (product.colors.length > 0) {
            // Cria a seção de cores se não existir
            const colorSection = document.createElement('div');
            colorSection.className = 'modal-colors';
            colorSection.innerHTML = `
                <h3>Cores</h3>
                <div class="color-options"></div>
            `;
            
            const quantitySection = modal.querySelector('.modal-quantity');
            quantitySection.parentNode.insertBefore(colorSection, quantitySection);
            
            const colorOptions = colorSection.querySelector('.color-options');
            product.colors.forEach(color => {
                const colorBtn = document.createElement('button');
                colorBtn.textContent = color;
                colorBtn.dataset.color = color;
                colorOptions.appendChild(colorBtn);
            });
            
            // Adiciona estilo aos botões de cor
            const colorButtons = colorSection.querySelectorAll('button');
            colorButtons.forEach(btn => {
                btn.style.margin = '0 5px 5px 0';
                btn.style.padding = '5px 10px';
                btn.style.border = '1px solid #ddd';
                btn.style.borderRadius = 'var(--border-radius)';
                btn.style.background = 'white';
                btn.style.cursor = 'pointer';
                btn.style.transition = 'var(--transition)';
                
                btn.addEventListener('click', function() {
                    colorButtons.forEach(b => {
                        b.style.backgroundColor = 'white';
                        b.style.color = 'var(--dark-color)';
                    });
                    
                    this.style.backgroundColor = 'var(--primary-color)';
                    this.style.color = 'white';
                });
            });
        }
        
        // Define o ID do produto no botão de adicionar ao carrinho
        const addToCartBtn = modal.querySelector('.add-to-cart-modal');
        addToCartBtn.dataset.productId = product.id;
        
        // Configura botão de lista de desejos
        const wishlistBtn = modal.querySelector('.wishlist-modal');
        const wishlistIcon = wishlistBtn.querySelector('i');
        
        if (inWishlist) {
            wishlistIcon.style.color = 'red';
            wishlistBtn.innerHTML = '<i class="fas fa-heart" style="color: red;"></i> Remover da Lista de Desejos';
        } else {
            wishlistIcon.style.color = '';
            wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> Adicionar à Lista de Desejos';
        }
        
        // Reseta a quantidade
        modal.querySelector('.quantity-selector input').value = 1;
        
        // Exibe o modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Impede rolagem da página
        
        // Adiciona eventos aos botões de tamanho
        const sizeButtons = modal.querySelectorAll('.size-options button');
        sizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                sizeButtons.forEach(btn => {
                    btn.style.backgroundColor = 'white';
                    btn.style.color = 'var(--dark-color)';
                });
                
                this.style.backgroundColor = 'var(--primary-color)';
                this.style.color = 'white';
            });
        });
        
        // Seleciona o primeiro tamanho por padrão
        if (sizeButtons.length > 0) {
            sizeButtons[0].click();
        }
    }
    
    // Controles do modal
    // Fecha o modal ao clicar no X
    const closeModalBtn = modal.querySelector('.close-modal');
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura rolagem da página
    });
    
    // Fecha o modal ao clicar fora dele
    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Controles de quantidade do modal
    const quantityDecrease = modal.querySelector('.quantity-decrease');
    const quantityIncrease = modal.querySelector('.quantity-increase');
    const quantityInput = modal.querySelector('.quantity-selector input');
    
    quantityDecrease.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });
    
    quantityIncrease.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        if (value < 10) {
            quantityInput.value = value + 1;
        }
    });
    
    // Botão de adicionar ao carrinho do modal
    const addToCartModal = modal.querySelector('.add-to-cart-modal');
    
    addToCartModal.addEventListener('click', function() {
        // Obtém a quantidade
        const quantity = parseInt(quantityInput.value);
        
        // Obtém o ID do produto
        const productId = parseInt(this.dataset.productId);
        
        // Obtém tamanho e cor selecionados
        let selectedSize = null;
        let selectedColor = null;
        
        const sizeButtons = modal.querySelectorAll('.size-options button');
        sizeButtons.forEach(btn => {
            if (btn.style.backgroundColor === 'var(--primary-color)') {
                selectedSize = btn.dataset.size;
            }
        });
        
        const colorButtons = modal.querySelectorAll('.color-options button');
        colorButtons.forEach(btn => {
            if (btn.style.backgroundColor === 'var(--primary-color)') {
                selectedColor = btn.dataset.color;
            }
        });
        
        // Adiciona ao carrinho
        addToCart(productId, quantity, selectedSize, selectedColor);
        
        // Fecha o modal
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Botão da lista de desejos no modal
    const wishlistModal = modal.querySelector('.wishlist-modal');
    
    wishlistModal.addEventListener('click', function() {
        const productId = parseInt(document.querySelector('.add-to-cart-modal').dataset.productId);
        const wasAdded = toggleWishlistItem(productId);
        const icon = this.querySelector('i');
        
        if (wasAdded) {
            icon.style.color = 'red';
            this.innerHTML = '<i class="fas fa-heart" style="color: red;"></i> Remover da Lista de Desejos';
            
            // Obtém o nome do produto
            const productName = document.querySelector('.modal-title').textContent;
            
            showNotification(`${productName} adicionado à lista de desejos!`);
        } else {
            icon.style.color = '';
            this.innerHTML = '<i class="fas fa-heart"></i> Adicionar à Lista de Desejos';
            showNotification('Produto removido da lista de desejos!');
        }
        
        // Atualiza o ícone de coração no card do produto
        const productCards = document.querySelectorAll(`.product-card[data-product-id="${productId}"]`);
        productCards.forEach(card => {
            const heartIcon = card.querySelector('.product-actions button:first-child i');
            if (heartIcon) {
                heartIcon.style.color = wasAdded ? 'red' : '';
            }
        });
    });
    
    // Ao clicar no ícone do carrinho no header
    document.querySelector('.cart a').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Se tiver uma página de carrinho, redireciona
        if (document.querySelector('#cart-page')) {
            window.location.href = 'carrinho.html';
        } else {
            // Se estiver na mesma página, rola até a seção do carrinho
            const cartSection = document.querySelector('#carrinho');
            if (cartSection) {
                window.scrollTo({
                    top: cartSection.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            } else {
                // Se não tiver nenhuma opção, mostra um mini carrinho
                showMiniCart();
            }
        }
    });
    
    // Função para mostrar mini-carrinho
    function showMiniCart() {
        // Verifica se já existe um mini-carrinho
        let miniCart = document.querySelector('.mini-cart');
        
        if (!miniCart) {
            // Cria o mini-carrinho
            miniCart = document.createElement('div');
            miniCart.className = 'mini-cart';
            document.body.appendChild(miniCart);
            
            // Estiliza o mini-carrinho
            miniCart.style.position = 'fixed';
            miniCart.style.top = '80px'; // Altura do header
            miniCart.style.right = '0';
            miniCart.style.width = '300px';
            miniCart.style.maxHeight = '400px';
            miniCart.style.backgroundColor = 'white';
            miniCart.style.boxShadow = 'var(--shadow)';
            miniCart.style.borderRadius = 'var(--border-radius)';
            miniCart.style.padding = '15px';
            miniCart.style.zIndex = '999';
            miniCart.style.overflowY = 'auto';
        }
        
        // Preenche o mini-carrinho
        if (cartDatabase.items.length === 0) {
            miniCart.innerHTML = '<p class="empty-cart">Seu carrinho está vazio.</p>';
        } else {
            let miniCartHTML = '<h3>Seu Carrinho</h3><ul class="mini-cart-items">';
            
            cartDatabase.items.forEach((item, index) => {
                miniCartHTML += `
                    <li>
                        <div class="mini-cart-item">
                            <div class="mini-item-image">
                                <img src="${item.image}" alt="${item.name}">
                            </div>
                            <div class="mini-item-info">
                                <h4>${item.name}</h4>
                                <p>${item.quantity} x R$ ${item.price.toFixed(2)}</p>
                                <p>Tamanho: ${item.size} | Cor: ${item.color}</p>
                            </div>
                            <button class="remove-item" data-index="${index}">&times;</button>
                        </div>
                    </li>
                `;
            });
            
            miniCartHTML += `</ul>
                <div class="mini-cart-total">
                    <p>Total: R$ ${cartDatabase.total.toFixed(2)}</p>
                </div>
                <div class="mini-cart-actions">
                    <a href="carrinho.html" class="btn">Ver Carrinho</a>
                    <button class="btn close-mini-cart">Fechar</button>
                </div>
            `;
            
            miniCart.innerHTML = miniCartHTML;
            
            // Adiciona evento para remover item
            miniCart.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const index = parseInt(this.dataset.index);
                    removeFromCart(index);
                    showMiniCart(); // Atualiza o mini-carrinho
                });
            });
            
            // Adiciona evento para fechar mini-carrinho
            miniCart.querySelector('.close-mini-cart').addEventListener('click', function() {
                miniCart.style.display = 'none';
            });
            
            // Estiliza os elementos internos
            const miniCartItems = miniCart.querySelectorAll('.mini-cart-item');
            miniCartItems.forEach(item => {
                item.style.display = 'flex';
                item.style.marginBottom = '10px';
                item.style.paddingBottom = '10px';
                item.style.borderBottom = '1px solid #eee';
            });
            
            const miniItemImage = miniCart.querySelectorAll('.mini-item-image');
            miniItemImage.forEach(img => {
                img.style.width = '50px';
                img.style.height = '50px';
                img.style.marginRight = '10px';
                img.style.borderRadius = 'var(--border-radius)';
                img.style.overflow = 'hidden';
            });
            
            const miniItemInfo = miniCart.querySelectorAll('.mini-item-info');
            miniItemInfo.forEach(info => {
                info.style.flex = '1';
            });
            
            miniCart.querySelectorAll('.mini-item-info h4').forEach(h4 => {
                h4.style.fontSize = '14px';
                h4.style.margin = '0 0 5px 0';
            });
            
            miniCart.querySelectorAll('.mini-item-info p').forEach(p => {
                p.style.fontSize = '12px';
                p.style.margin = '0';
                p.style.color = 'var(--gray-color)';
            });
            
            const removeButtons = miniCart.querySelectorAll('.remove-item');
            removeButtons.forEach(btn => {
                btn.style.background = 'none';
                btn.style.border = 'none';
                btn.style.fontSize = '18px';
                btn.style.cursor = 'pointer';
                btn.style.color = 'var(--gray-color)';
            });
            
            const miniCartTotal = miniCart.querySelector('.mini-cart-total');
            miniCartTotal.style.borderTop = '1px solid #eee';
            miniCartTotal.style.paddingTop = '10px';
            miniCartTotal.style.marginTop = '10px';
            miniCartTotal.style.fontWeight = 'bold';
            
            const miniCartActions = miniCart.querySelector('.mini-cart-actions');
            miniCartActions.style.display = 'flex';
            miniCartActions.style.justifyContent = 'space-between';
            miniCartActions.style.marginTop = '15px';
        }
        
        // Exibe o mini-carrinho
        miniCart.style.display = 'block';
        
        // Fecha o mini-carrinho ao clicar fora dele
        document.addEventListener('click', function closeCart(e) {
            if (!miniCart.contains(e.target) && !e.target.closest('.cart')) {
                miniCart.style.display = 'none';
                document.removeEventListener('click', closeCart);
            }
        });
    }
    
    // Função para renderizar a página do carrinho
    function renderCartPage() {
        const cartContainer = document.querySelector('#cart-items');
        
        if (!cartContainer) return;
        
        if (cartDatabase.items.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h2>Seu carrinho está vazio</h2>
                    <p>Adicione produtos para continuar suas compras.</p>
                    <a href="index.html" class="btn">Continuar Comprando</a>
                </div>
            `;
            
            // Oculta o resumo e botão de finalizar
            const cartSummary = document.querySelector('#cart-summary');
            if (cartSummary) {
                cartSummary.style.display = 'none';
            }
            
            return;
        }
        
        // Exibe o resumo
        const cartSummary = document.querySelector('#cart-summary');
        if (cartSummary) {
            cartSummary.style.display = 'block';
        }
        
        // Renderiza os itens
        let cartItemsHTML = '';
        
        cartDatabase.items.forEach((item, index) => {
            cartItemsHTML += `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>Tamanho: ${item.size} | Cor: ${item.color}</p>
                        <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-decrease" data-index="${index}">-</button>
                        <input type="number" value="${item.quantity}" min="1" max="10" data-index="${index}">
                        <button class="quantity-increase" data-index="${index}">+</button>
                    </div>
                    <div class="cart-item-total">
                        R$ ${item.total.toFixed(2)}
                    </div>
                    <div class="cart-item-remove">
                        <button class="remove-cart-item" data-index="${index}"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
        });
        
        cartContainer.innerHTML = cartItemsHTML;
        
        // Atualiza o resumo
        const subtotal = document.querySelector('#cart-subtotal');
        const shipping = document.querySelector('#cart-shipping');
        const total = document.querySelector('#cart-total');
        
        if (subtotal) subtotal.textContent = `R$ ${cartDatabase.total.toFixed(2)}`;
        
        // Cálculo do frete (grátis acima de R$ 300)
        const shippingValue = cartDatabase.total >= 300 ? 0 : 19.90;
        if (shipping) shipping.textContent = shippingValue === 0 ? 'Grátis' : `R$ ${shippingValue.toFixed(2)}`;
        
        if (total) total.textContent = `R$ ${(cartDatabase.total + shippingValue).toFixed(2)}`;
        
        // Adiciona eventos aos botões
        document.querySelectorAll('.quantity-decrease').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                const input = document.querySelector(`input[data-index="${index}"]`);
                let value = parseInt(input.value);
                if (value > 1) {
                    value--;
                    input.value = value;
                    updateCartItemQuantity(index, value);
                }
            });
        });
        
        document.querySelectorAll('.quantity-increase').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                const input = document.querySelector(`input[data-index="${index}"]`);
                let value = parseInt(input.value);
                const product = productDatabase.find(p => p.id === cartDatabase.items[index].productId);
                
                // Limita a quantidade ao estoque disponível
                if (value < Math.min(10, product ? product.stock : 10)) {
                    value++;
                    input.value = value;
                    updateCartItemQuantity(index, value);
                } else {
                    showNotification('Quantidade máxima disponível atingida!', 'warning');
                }
            });
        });
        
        document.querySelectorAll('.cart-item-quantity input').forEach(input => {
            input.addEventListener('change', function() {
                const index = parseInt(this.dataset.index);
                let value = parseInt(this.value);
                
                if (isNaN(value) || value < 1) {
                    value = 1;
                    this.value = 1;
                }
                
                const product = productDatabase.find(p => p.id === cartDatabase.items[index].productId);
                const maxStock = Math.min(10, product ? product.stock : 10);
                
                if (value > maxStock) {
                    value = maxStock;
                    this.value = maxStock;
                    showNotification('Quantidade máxima disponível atingida!', 'warning');
                }
                
                updateCartItemQuantity(index, value);
            });
        });
        
        document.querySelectorAll('.remove-cart-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                removeFromCart(index);
            });
        });
    }
    
    // Função para renderizar produtos recomendados na página do carrinho
    function renderRecommendedProducts() {
        const recommendedSlider = document.querySelector('.recommended-slider');
        if (!recommendedSlider) return;
        
        // Limpa o slider
        recommendedSlider.innerHTML = '';
        
        // Se não houver itens no carrinho, recomenda produtos populares
        let productsToRecommend = [];
        
        if (cartDatabase.items.length === 0) {
            // Recomenda os produtos melhor avaliados
            productsToRecommend = [...productDatabase]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 4);
        } else {
            // Recomenda produtos da mesma categoria dos itens no carrinho
            const cartCategories = [...new Set(
                cartDatabase.items.map(item => {
                    const product = productDatabase.find(p => p.id === item.productId);
                    return product ? product.category : null;
                }).filter(Boolean)
            )];
            
            // Filtra produtos das mesmas categorias, excluindo os que já estão no carrinho
            productsToRecommend = productDatabase.filter(product => 
                cartCategories.includes(product.category) && 
                !cartDatabase.items.some(item => item.productId === product.id)
            ).slice(0, 4);
            
            // Se não tiver produtos suficientes, adiciona os melhor avaliados
            if (productsToRecommend.length < 4) {
                const highRatedProducts = [...productDatabase]
                    .sort((a, b) => b.rating - a.rating)
                    .filter(product => !productsToRecommend.includes(product) && 
                        !cartDatabase.items.some(item => item.productId === product.id));
                
                productsToRecommend = [...productsToRecommend, ...highRatedProducts].slice(0, 4);
            }
        }
        
        // Renderiza os produtos recomendados
        productsToRecommend.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-category', product.category);
            productCard.setAttribute('data-product-id', product.id);
            
            // Configura o HTML do produto
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.tag ? `<div class="product-tag">${product.tag}</div>` : ''}
                    <div class="product-actions">
                        <button><i class="fas fa-heart ${isInWishlist(product.id) ? 'active' : ''}"></i></button>
                        <button><i class="fas fa-shopping-cart"></i></button>
                        <button><i class="fas fa-search"></i></button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-rating">
                        ${generateRatingStars(product.rating)}
                        <span>(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        ${product.oldPrice ? `<span class="old-price">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                        <span class="current-price">R$ ${product.price.toFixed(2)}</span>
                    </div>
                </div>
            `;
            
            // Adiciona o produto ao slider
            recommendedSlider.appendChild(productCard);
            
            // Adiciona evento de clique para abrir modal
            productCard.querySelector('.product-actions button:nth-child(3)').addEventListener('click', (e) => {
                e.stopPropagation();
                openProductModal(product.id);
            });
            
            // Adiciona evento de clique para adicionar ao carrinho
            productCard.querySelector('.product-actions button:nth-child(2)').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product.id, 1);
            });
            
            // Adiciona evento de clique para favoritos
            productCard.querySelector('.product-actions button:nth-child(1)').addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(e.currentTarget);
            });
        });
    }
    
    // Botão para finalizar compra
    if (document.querySelector('#finish-purchase')) {
        document.querySelector('#finish-purchase').addEventListener('click', function(e) {
            e.preventDefault();
            
            if (cartDatabase.items.length === 0) {
                showNotification('Seu carrinho está vazio!', 'error');
                return;
            }
            
            // Aqui você pode adicionar lógica para ir para a página de checkout
            showNotification('Pedido finalizado com sucesso! Redirecionando para o pagamento...', 'success');
            
            // Simula redirecionamento após 2 segundos
            setTimeout(() => {
                // Em um site real, isto seria window.location.href = 'checkout.html';
                // Para este exemplo, apenas limpar o carrinho
                cartDatabase = {
                    items: [],
                    total: 0,
                    count: 0
                };
                saveCart();
                renderCartPage();
            }, 2000);
        });
    }
    
    // Adicionar/Remover da lista de desejos
    function toggleWishlistItem(productId) {
        const productIndex = wishlistDatabase.items.findIndex(item => item.productId === productId);
        
        if (productIndex !== -1) {
            // Remover se já existe
            wishlistDatabase.items.splice(productIndex, 1);
            updateWishlistTotals();
            saveWishlist();
            return false; // Indica que foi removido
        } else {
            // Adicionar se não existe
            const product = productDatabase.find(p => p.id === productId);
            
            if (!product) {
                showNotification('Produto não encontrado!', 'error');
                return false;
            }
            
            wishlistDatabase.items.push({
                productId: product.id,
                name: product.name,
                price: product.price,
                oldPrice: product.oldPrice,
                image: product.image,
                rating: product.rating,
                reviews: product.reviews,
                sizes: product.sizes,
                colors: product.colors
            });
            
            updateWishlistTotals();
            saveWishlist();
            return true; // Indica que foi adicionado
        }
    }
    
    // Atualizar totais da lista de desejos
    function updateWishlistTotals() {
        wishlistDatabase.count = wishlistDatabase.items.length;
        wishlistDatabase.total = wishlistDatabase.items.reduce((sum, item) => sum + item.price, 0);
    }
    
    // Verificar se um produto está na lista de desejos
    function isInWishlist(productId) {
        return wishlistDatabase.items.some(item => item.productId === productId);
    }
    
    // Renderizar página da lista de desejos
    function renderWishlistPage() {
        // Carregar a lista de desejos
        loadWishlist();
        
        const wishlistContainer = document.querySelector('#wishlist-items');
        const wishlistCount = document.querySelector('#wishlist-count');
        const wishlistTotal = document.querySelector('#wishlist-total');
        const addAllToCartBtn = document.querySelector('#add-all-to-cart');
        const clearWishlistBtn = document.querySelector('#clear-wishlist');
        
        if (!wishlistContainer) return;
        
        // Atualizar contadores
        if (wishlistCount) wishlistCount.textContent = wishlistDatabase.count;
        if (wishlistTotal) wishlistTotal.textContent = `R$ ${wishlistDatabase.total.toFixed(2)}`;
        
        // Verificar se a lista está vazia
        if (wishlistDatabase.items.length === 0) {
            wishlistContainer.innerHTML = `
                <div class="wishlist-empty">
                    <i class="fas fa-heart"></i>
                    <h3>Sua lista de desejos está vazia</h3>
                    <p>Adicione produtos à sua lista de desejos para comprá-los mais tarde.</p>
                    <a href="index.html#colecao" class="btn">Explorar Produtos</a>
                </div>
            `;
            
            // Desabilitar botões de ação
            if (addAllToCartBtn) addAllToCartBtn.disabled = true;
            if (clearWishlistBtn) clearWishlistBtn.disabled = true;
            
            return;
        }
        
        // Habilitar botões de ação
        if (addAllToCartBtn) addAllToCartBtn.disabled = false;
        if (clearWishlistBtn) clearWishlistBtn.disabled = false;
        
        // Renderizar itens da lista
        let wishlistHTML = '';
        
        wishlistDatabase.items.forEach(item => {
            wishlistHTML += `
                <div class="wishlist-item" data-product-id="${item.productId}">
                    <div class="wishlist-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="wishlist-item-details">
                        <h3>${item.name}</h3>
                        <div class="product-rating">
                            ${generateRatingStars(item.rating)}
                            <span>(${item.reviews})</span>
                        </div>
                        <p>Disponível em: ${item.sizes.join(', ')}</p>
                        <p>Cores: ${item.colors.join(', ')}</p>
                        <div class="wishlist-item-price">
                            ${item.oldPrice ? `<span class="old-price">R$ ${item.oldPrice.toFixed(2)}</span>` : ''}
                            R$ ${item.price.toFixed(2)}
                        </div>
                        <div class="wishlist-item-actions">
                            <button class="btn-small add-to-cart-btn" data-product-id="${item.productId}">
                                <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
                            </button>
                            <button class="btn-small view-product-btn" data-product-id="${item.productId}">
                                <i class="fas fa-eye"></i> Ver Detalhes
                            </button>
                        </div>
                    </div>
                    <button class="wishlist-item-remove" data-product-id="${item.productId}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
        });
        
        wishlistContainer.innerHTML = wishlistHTML;
        
        // Adicionar event listeners
        // Botões de adicionar ao carrinho
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-product-id'));
                addToCart(productId, 1);
            });
        });
        
        // Botões de ver detalhes
        document.querySelectorAll('.view-product-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-product-id'));
                openProductModal(productId);
            });
        });
        
        // Botões de remover
        document.querySelectorAll('.wishlist-item-remove').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-product-id'));
                const wasRemoved = toggleWishlistItem(productId);
                
                // Remover o item visualmente com animação
                const item = this.closest('.wishlist-item');
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.height = '0';
                    item.style.margin = '0';
                    item.style.padding = '0';
                    item.style.overflow = 'hidden';
                    
                    setTimeout(() => {
                        renderWishlistPage();
                    }, 300);
                }, 300);
                
                showNotification('Item removido da lista de desejos!');
            });
        });
        
        // Adicionar todos ao carrinho
        if (addAllToCartBtn) {
            addAllToCartBtn.addEventListener('click', function() {
                wishlistDatabase.items.forEach(item => {
                    addToCart(item.productId, 1);
                });
                
                showNotification('Todos os itens foram adicionados ao carrinho!', 'success');
            });
        }
        
        // Limpar lista de desejos
        if (clearWishlistBtn) {
            clearWishlistBtn.addEventListener('click', function() {
                if (confirm('Tem certeza que deseja limpar sua lista de desejos?')) {
                    wishlistDatabase.items = [];
                    updateWishlistTotals();
                    saveWishlist();
                    renderWishlistPage();
                    showNotification('Lista de desejos foi limpa!');
                }
            });
        }
        
        // Configurar botões de compartilhamento
        document.querySelectorAll('.share-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const platform = this.getAttribute('data-platform');
                const url = window.location.href;
                const title = 'Minha lista de desejos na ELEGANCE';
                const text = 'Confira os produtos que eu adicionei à minha lista de desejos na ELEGANCE!';
                
                let shareUrl = '';
                
                switch (platform) {
                    case 'whatsapp':
                        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
                        break;
                    case 'facebook':
                        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                        break;
                    case 'twitter':
                        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                        break;
                    case 'email':
                        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`;
                        break;
                    case 'copy':
                        navigator.clipboard.writeText(url).then(() => {
                            showNotification('Link copiado para a área de transferência!', 'success');
                        });
                        return;
                    default:
                        return;
                }
                
                window.open(shareUrl, '_blank');
            });
        });
        
        // Renderizar produtos recomendados
        renderWishlistRecommendedProducts();
    }
    
    // Renderizar produtos recomendados na página de lista de desejos
    function renderWishlistRecommendedProducts() {
        const recommendedSlider = document.querySelector('.recommended-slider');
        if (!recommendedSlider) return;
        
        // Limpar o slider
        recommendedSlider.innerHTML = '';
        
        // Se não houver itens na lista de desejos, mostrar produtos populares
        let productsToRecommend = [];
        
        if (wishlistDatabase.items.length === 0) {
            // Recomenda os produtos melhor avaliados
            productsToRecommend = [...productDatabase]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 4);
        } else {
            // Recomenda produtos da mesma categoria dos itens na lista de desejos
            const wishlistCategories = [...new Set(
                wishlistDatabase.items.map(item => {
                    const product = productDatabase.find(p => p.id === item.productId);
                    return product ? product.category : null;
                }).filter(Boolean)
            )];
            
            // Filtra produtos das mesmas categorias, excluindo os que já estão na lista de desejos
            productsToRecommend = productDatabase.filter(product => 
                wishlistCategories.includes(product.category) && 
                !wishlistDatabase.items.some(item => item.productId === product.id)
            ).slice(0, 4);
            
            // Se não tiver produtos suficientes, adiciona os melhor avaliados
            if (productsToRecommend.length < 4) {
                const highRatedProducts = [...productDatabase]
                    .sort((a, b) => b.rating - a.rating)
                    .filter(product => !productsToRecommend.includes(product) && 
                        !wishlistDatabase.items.some(item => item.productId === product.id));
                
                productsToRecommend = [...productsToRecommend, ...highRatedProducts].slice(0, 4);
            }
        }
        
        // Renderiza os produtos recomendados
        productsToRecommend.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-category', product.category);
            productCard.setAttribute('data-product-id', product.id);
            
            // Configura o HTML do produto
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.tag ? `<div class="product-tag">${product.tag}</div>` : ''}
                    <div class="product-actions">
                        <button class="wishlist-btn" data-product-id="${product.id}">
                            <i class="fas fa-heart ${isInWishlist(product.id) ? 'active' : ''}"></i>
                        </button>
                        <button class="cart-btn" data-product-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        <button class="view-btn" data-product-id="${product.id}">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-rating">
                        ${generateRatingStars(product.rating)}
                        <span>(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        ${product.oldPrice ? `<span class="old-price">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                        <span class="current-price">R$ ${product.price.toFixed(2)}</span>
                    </div>
                </div>
            `;
            
            // Adiciona o produto ao slider
            recommendedSlider.appendChild(productCard);
            
            // Adiciona evento de clique para abrir modal
            productCard.querySelector('.view-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                openProductModal(product.id);
            });
            
            // Adiciona evento de clique para adicionar ao carrinho
            productCard.querySelector('.cart-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product.id, 1);
            });
            
            // Adiciona evento de clique para favoritos
            productCard.querySelector('.wishlist-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(e.currentTarget.getAttribute('data-product-id'));
                const wasAdded = toggleWishlistItem(productId);
                
                const icon = e.currentTarget.querySelector('i');
                if (wasAdded) {
                    icon.classList.add('active');
                    showNotification(`${product.name} adicionado à lista de desejos!`);
                } else {
                    icon.classList.remove('active');
                    showNotification('Produto removido da lista de desejos!');
                }
            });
        });
    }
    
    // Função para mostrar notificações com tipos (success, error, warning)
    function showNotification(message, type = 'success') {
        // Verifica se já existe uma notificação
        let notification = document.querySelector('.notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'notification';
            document.body.appendChild(notification);
        }
        
        // Adiciona a mensagem e exibe a notificação
        notification.textContent = message;
        notification.style.display = 'block';
        notification.style.opacity = '1';
        
        // Estiliza a notificação
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = 'var(--border-radius)';
        notification.style.boxShadow = 'var(--shadow)';
        notification.style.zIndex = '1000';
        notification.style.transition = 'opacity 0.3s ease';
        
        // Define a cor com base no tipo
        if (type === 'error') {
            notification.style.backgroundColor = '#e74c3c';
            notification.style.color = 'white';
        } else if (type === 'warning') {
            notification.style.backgroundColor = '#f39c12';
            notification.style.color = 'white';
        } else {
            notification.style.backgroundColor = 'var(--accent-color)';
            notification.style.color = 'white';
        }
        
        // Remove a notificação após 3 segundos
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 300);
        }, 3000);
    }
});