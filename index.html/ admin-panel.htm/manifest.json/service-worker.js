<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🏢 LB-K SMART - Boutique Intelligente | Kolwezi RDC</title>
    
    <!-- PWA Configuration -->
    <meta name="theme-color" content="#1a237e">
    <link rel="manifest" href="manifest.json">
    
    <!-- Styles -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body class="desktop-mode">
    
    <!-- ===== BOUTON HAMBURGER MOBILE ===== -->
    <button class="hamburger-btn" id="hamburgerBtn">
        <i class="fas fa-bars"></i>
    </button>
    
    <!-- ===== NAVIGATION MASQUÉE ===== -->
    <nav class="hidden-navbar" id="hiddenNavbar">
        <div class="nav-header">
            <div class="nav-logo">
                <i class="fas fa-store"></i>
                <span>LB-K SMART</span>
            </div>
            <button class="nav-close-btn" id="navCloseBtn">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="nav-content">
            <!-- Section Coordonnées -->
            <div class="nav-section">
                <h3><i class="fas fa-map-marker-alt"></i> COORDONNÉES</h3>
                <div class="contact-info">
                    <p><i class="fas fa-home"></i> <strong>Adresse:</strong> Site Jolie RVA, Manika, Kolwezi, RDC</p>
                    <p><i class="fab fa-whatsapp"></i> <strong>Téléphone/WhatsApp:</strong> +243 82 293 7321</p>
                    <p><i class="fas fa-clock"></i> <strong>Horaires:</strong> Lundi-Samedi: 9h00-17h00</p>
                    <p><i class="fas fa-envelope"></i> <strong>Email:</strong> contact@lbksmart.com</p>
                    <p><i class="fas fa-calendar-check"></i> <strong>Consultations:</strong> Sur rendez-vous uniquement</p>
                </div>
            </div>
            
            <!-- Section Disponibilité & Commande -->
            <div class="nav-section">
                <h3><i class="fas fa-box"></i> DISPONIBILITÉ & COMMANDE</h3>
                <div class="order-info">
                    <p><i class="fas fa-shopping-cart"></i> <strong>Commande sur mesure personnalisée</strong></p>
                    <p><i class="fas fa-arrow-right"></i> Pour commander, fournir:</p>
                    <ul>
                        <li><i class="fas fa-image"></i> Image du modèle</li>
                        <li><i class="fas fa-tag"></i> Marque (si connue)</li>
                        <li><i class="fas fa-ruler"></i> Quantité et taille</li>
                        <li><i class="fas fa-globe"></i> Marques chinoises et européennes</li>
                    </ul>
                    <p><i class="fas fa-truck"></i> <strong>Livraison:</strong> À domicile | Service professionnel</p>
                    <p><i class="fas fa-money-bill-wave"></i> <strong>Paiement:</strong> Mobile Money, IllicoCash, Paiement à la livraison</p>
                </div>
            </div>
            
            <!-- Section Tarification -->
            <div class="nav-section">
                <h3><i class="fas fa-shipping-fast"></i> TARIFICATION DES PRIX</h3>
                <div class="pricing-info">
                    <p><i class="fas fa-plane"></i> <strong>Transport par avion:</strong></p>
                    <div class="pricing-detail">
                        <h4>Colis normal (Habillement, Accessoires)</h4>
                        <p><strong>28 $/kg</strong> | Délai: 15-21 jours</p>
                    </div>
                    <div class="pricing-detail">
                        <h4>Colis express (Électroniques, Liquides)</h4>
                        <p><strong>30 $/kg</strong> | Délai: 10-15 jours</p>
                        <p><small>Téléphones: 30$/pièce | Ordinateurs: 50$/pièce</small></p>
                    </div>
                    <p><i class="fas fa-ship"></i> <strong>Transport par bateau:</strong></p>
                    <div class="pricing-detail">
                        <p><strong>1 CBM: 500 $</strong> | <strong>1 tonne: 600 $</strong></p>
                        <p><small>Délai: 70-90 jours</small></p>
                    </div>
                </div>
            </div>
            
            <!-- Boutons d'assistance -->
            <div class="nav-assistance">
                <button class="nav-assist-btn whatsapp-assist">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </button>
                <button class="nav-assist-btn ai-assist">
                    <i class="fas fa-robot"></i> IA Assistant
                </button>
                <button class="nav-assist-btn admin-assist">
                    <i class="fas fa-user-shield"></i> Admin
                </button>
            </div>
        </div>
    </nav>
    
    <!-- ===== BARRE DE RECHERCHE ===== -->
    <div class="search-bar-container">
        <div class="search-wrapper">
            <input type="text" class="search-input" placeholder="Rechercher un produit...">
            <button class="search-btn">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>
    
    <!-- ===== CARROUSEL PRODUITS ===== -->
    <div class="carousel-container" id="productCarousel">
        <div class="carousel-slides" id="carouselSlides">
            <!-- Slides générés dynamiquement -->
        </div>
        <button class="carousel-btn prev-btn">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="carousel-btn next-btn">
            <i class="fas fa-chevron-right"></i>
        </button>
        <div class="carousel-dots" id="carouselDots">
            <!-- Points générés dynamiquement -->
        </div>
    </div>
    
    <!-- ===== À PROPOS DE LB-K SMART ===== -->
    <section class="about-section">
        <div class="section-container">
            <h2><i class="fas fa-store-alt"></i> À PROPOS DE LB-K SMART</h2>
            <div class="about-content">
                <p>LB-K SMART est une boutique en ligne spécialisée dans la vente d'accessoires modernes, d'habits tendance et de produits pharmaceutiques sélectionnés, avec un engagement fort envers la qualité, la fiabilité et la satisfaction client.</p>
                <p>Nous proposons une large gamme de produits issus de marques chinoises et européennes, soigneusement choisis pour répondre aux besoins quotidiens des particuliers et des professionnels.</p>
                <p><strong>Notre mission:</strong> Vous offrir des produits de qualité, un service fiable et une livraison rapide, avec des articles sélectionnés pour leur performance, leur style et leur durabilité.</p>
            </div>
        </div>
    </section>
    
    <!-- ===== CATALOGUE MARKETING ===== -->
    <section class="catalogue-section">
        <div class="section-container">
            <h2 class="section-title"><i class="fas fa-shopping-bag"></i> CATALOGUE MARKETING - LB-K SMART 🛒🛍️</h2>
            <p class="section-subtitle">Votre boutique incontournable</p>
            
            <!-- Boutique Betty -->
            <div class="shop-category">
                <h3 class="shop-title"><i class="fas fa-female"></i> BETTY KABEY SMART</h3>
                <div class="category-grid">
                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-tshirt"></i>
                        </div>
                        <h4>Habillement</h4>
                        <button class="view-products-btn" data-category="habillement">Voir produits</button>
                    </div>
                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-spray-can"></i>
                        </div>
                        <h4>Produits cosmétiques</h4>
                        <button class="view-products-btn" data-category="cosmetiques">Voir produits</button>
                    </div>
                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-broom"></i>
                        </div>
                        <h4>Produits ménagers</h4>
                        <button class="view-products-btn" data-category="menagers">Voir produits</button>
                    </div>
                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-blender"></i>
                        </div>
                        <h4>Accessoires électroménagers</h4>
                        <button class="view-products-btn" data-category="electromenager">Voir produits</button>
                    </div>
                </div>
            </div>
            
            <!-- Boutique Laurent -->
            <div class="shop-category">
                <h3 class="shop-title"><i class="fas fa-male"></i> LAURENT KABESHA SMART</h3>
                <div class="category-grid">
                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <h4>Accessoires électriques</h4>
                        <button class="view-products-btn" data-category="electriques">Voir produits</button>
                    </div>
                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <h4>Accessoires électroniques</h4>
                        <button class="view-products-btn" data-category="electroniques">Voir produits</button>
                    </div>
                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-car"></i>
                        </div>
                        <h4>Accessoires automobiles</h4>
                        <button class="view-products-btn" data-category="automobiles">Voir produits</button>
                    </div>
                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-pills"></i>
                        </div>
                        <h4>Produits pharmaceutiques</h4>
                        <button class="view-products-btn" data-category="pharmaceutiques">Voir produits</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- ===== HABILLEMENT HOMME & FEMME ===== -->
    <section class="clothing-section">
        <div class="section-container">
            <h2 class="section-title"><i class="fas fa-tshirt"></i> HABITS & ACCESSOIRES - HOMME & FEMME 👗👔</h2>
            <p class="section-subtitle">Style • Qualité • Tendance</p>
            
            <div class="gender-tabs">
                <button class="gender-tab active" data-gender="homme">👔 MODE HOMME</button>
                <button class="gender-tab" data-gender="femme">👗 MODE FEMME</button>
            </div>
            
            <!-- Contenu Homme -->
            <div class="gender-content active" id="hommeContent">
                <div class="clothing-category">
                    <h3><i class="fas fa-vest"></i> Vêtements Homme</h3>
                    <div class="product-list">
                        <div class="product-item" data-product-id="1">
                            <span class="product-name">T-shirts, polos et chemises</span>
                            <button class="edit-product-btn" data-id="1"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="2">
                            <span class="product-name">Pantalons, jeans et shorts</span>
                            <button class="edit-product-btn" data-id="2"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="3">
                            <span class="product-name">Ensembles et tenues décontractées</span>
                            <button class="edit-product-btn" data-id="3"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="4">
                            <span class="product-name">Vestes et blousons</span>
                            <button class="edit-product-btn" data-id="4"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="5">
                            <span class="product-name">Sous-vêtements et vêtements confort</span>
                            <button class="edit-product-btn" data-id="5"><i class="fas fa-edit"></i></button>
                        </div>
                    </div>
                </div>
                
                <div class="clothing-category">
                    <h3><i class="fas fa-gem"></i> Accessoires Homme</h3>
                    <div class="product-list">
                        <div class="product-item" data-product-id="6">
                            <span class="product-name">Montres et bracelets</span>
                            <button class="edit-product-btn" data-id="6"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="7">
                            <span class="product-name">Ceintures et portefeuilles</span>
                            <button class="edit-product-btn" data-id="7"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="8">
                            <span class="product-name">Lunettes de soleil</span>
                            <button class="edit-product-btn" data-id="8"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="9">
                            <span class="product-name">Chaussures et sandales</span>
                            <button class="edit-product-btn" data-id="9"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="10">
                            <span class="product-name">Parfums homme</span>
                            <button class="edit-product-btn" data-id="10"><i class="fas fa-edit"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Contenu Femme -->
            <div class="gender-content" id="femmeContent">
                <div class="clothing-category">
                    <h3><i class="fas fa-female"></i> Vêtements Femme</h3>
                    <div class="product-list">
                        <div class="product-item" data-product-id="11">
                            <span class="product-name">Robes (courtes, longues, soirée)</span>
                            <button class="edit-product-btn" data-id="11"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="12">
                            <span class="product-name">Ensembles et tenues chic</span>
                            <button class="edit-product-btn" data-id="12"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="13">
                            <span class="product-name">Jupes, pantalons et jeans</span>
                            <button class="edit-product-btn" data-id="13"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="14">
                            <span class="product-name">T-shirts, tops et chemisiers</span>
                            <button class="edit-product-btn" data-id="14"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="15">
                            <span class="product-name">Sous-vêtements et vêtements de confort</span>
                            <button class="edit-product-btn" data-id="15"><i class="fas fa-edit"></i></button>
                        </div>
                    </div>
                </div>
                
                <div class="clothing-category">
                    <h3><i class="fas fa-gem"></i> Accessoires Femme</h3>
                    <div class="product-list">
                        <div class="product-item" data-product-id="16">
                            <span class="product-name">Sacs à main et pochettes</span>
                            <button class="edit-product-btn" data-id="16"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="17">
                            <span class="product-name">Montres et bijoux (colliers, bracelets, bagues)</span>
                            <button class="edit-product-btn" data-id="17"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="18">
                            <span class="product-name">Lunettes de soleil</span>
                            <button class="edit-product-btn" data-id="18"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="19">
                            <span class="product-name">Chaussures et sandales</span>
                            <button class="edit-product-btn" data-id="19"><i class="fas fa-edit"></i></button>
                        </div>
                        <div class="product-item" data-product-id="20">
                            <span class="product-name">Parfums femme</span>
                            <button class="edit-product-btn" data-id="20"><i class="fas fa-edit"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- ===== AUTRES CATÉGORIES ===== -->
    <section class="other-categories">
        <div class="section-container">
            <h2 class="section-title"><i class="fas fa-layer-group"></i> AUTRES CATÉGORIES DE PRODUITS</h2>
            
            <div class="categories-grid">
                <!-- Accessoires électriques -->
                <div class="category-block">
                    <h3><i class="fas fa-bolt"></i> Accessoires électriques</h3>
                    <ul class="category-list">
                        <li data-product-id="21">Groupes solaires <button class="edit-btn-small" data-id="21"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="22">Panneaux solaires <button class="edit-btn-small" data-id="22"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="23">Prises et multiprises électriques <button class="edit-btn-small" data-id="23"><i class="fas fa-edit"></i></button></li>
                    </ul>
                </div>
                
                <!-- Accessoires électroniques -->
                <div class="category-block">
                    <h3><i class="fas fa-mobile-alt"></i> Accessoires électroniques</h3>
                    <ul class="category-list">
                        <li data-product-id="24">Écouteurs filaires et Bluetooth <button class="edit-btn-small" data-id="24"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="25">Power banks haute capacité <button class="edit-btn-small" data-id="25"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="26">Chargeurs rapides USB / Type-C <button class="edit-btn-small" data-id="26"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="27">Montres et bracelets intelligents <button class="edit-btn-small" data-id="27"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="28">Lunettes et bagues intelligentes <button class="edit-btn-small" data-id="28"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="29">Ordinateurs et accessoires informatiques <button class="edit-btn-small" data-id="29"><i class="fas fa-edit"></i></button></li>
                    </ul>
                </div>
                
                <!-- Électroménager -->
                <div class="category-block">
                    <h3><i class="fas fa-blender"></i> Électroménager</h3>
                    <ul class="category-list">
                        <li data-product-id="30">Salon: ventilateurs, lampes et accessoires <button class="edit-btn-small" data-id="30"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="31">Cuisine: mixeurs, plaques et petits appareils <button class="edit-btn-small" data-id="31"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="32">Chambre: lampes, ventilateurs et accessoires <button class="edit-btn-small" data-id="32"><i class="fas fa-edit"></i></button></li>
                    </ul>
                </div>
                
                <!-- Automobile -->
                <div class="category-block">
                    <h3><i class="fas fa-car"></i> Automobile</h3>
                    <ul class="category-list">
                        <li data-product-id="33">Parfums pour véhicules <button class="edit-btn-small" data-id="33"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="34">Tapis, housses de sièges et textiles auto <button class="edit-btn-small" data-id="34"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="35">Radios tactiles, caméras et alarmes <button class="edit-btn-small" data-id="35"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="36">Pièces automobiles (Ford, Toyota, Mazda, Mercedes, etc.) <button class="edit-btn-small" data-id="36"><i class="fas fa-edit"></i></button></li>
                    </ul>
                </div>
                
                <!-- Produits ménagers -->
                <div class="category-block">
                    <h3><i class="fas fa-broom"></i> Produits ménagers</h3>
                    <ul class="category-list">
                        <li data-product-id="37">Détergents multi-surfaces <button class="edit-btn-small" data-id="37"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="38">Savon liquide vaisselle <button class="edit-btn-small" data-id="38"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="39">Désinfectants multi-usages <button class="edit-btn-small" data-id="39"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="40">Javel blanche <button class="edit-btn-small" data-id="40"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="41">Éponges et chiffons microfibres <button class="edit-btn-small" data-id="41"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="42">Spray vitres <button class="edit-btn-small" data-id="42"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="43">Poudre à laver <button class="edit-btn-small" data-id="43"><i class="fas fa-edit"></i></button></li>
                    </ul>
                </div>
                
                <!-- Cosmétiques & hygiène -->
                <div class="category-block">
                    <h3><i class="fas fa-spray-can"></i> Cosmétiques & hygiène</h3>
                    <ul class="category-list">
                        <li data-product-id="44">Savon doux pour le corps <button class="edit-btn-small" data-id="44"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="45">Crème hydratante <button class="edit-btn-small" data-id="45"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="46">Gel douche parfumé <button class="edit-btn-small" data-id="46"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="47">Shampoing revitalisant <button class="edit-btn-small" data-id="47"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="48">Lait corporel nourrissant <button class="edit-btn-small" data-id="48"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="49">Déodorant roll-on <button class="edit-btn-small" data-id="49"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="50">Brosses et peignes <button class="edit-btn-small" data-id="50"><i class="fas fa-edit"></i></button></li>
                    </ul>
                </div>
                
                <!-- Produits pharmaceutiques -->
                <div class="category-block">
                    <h3><i class="fas fa-pills"></i> Produits pharmaceutiques</h3>
                    <ul class="category-list">
                        <li data-product-id="51">Produits dentaires <button class="edit-btn-small" data-id="51"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="52">Produits pour l'estomac <button class="edit-btn-small" data-id="52"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="53">Produits hémorroïdaires <button class="edit-btn-small" data-id="53"><i class="fas fa-edit"></i></button></li>
                        <li data-product-id="54">Produits pour la tension artérielle <button class="edit-btn-small" data-id="54"><i class="fas fa-edit"></i></button></li>
                    </ul>
                    <div class="pharma-warning">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span>Pour toute situation sérieuse, veuillez consulter un professionnel de santé.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- ===== PIED DE PAGE ===== -->
    <footer class="main-footer">
        <div class="footer-container">
            <div class="footer-logo">
                <h2><i class="fas fa-store"></i> LB-K SMART</h2>
                <p class="footer-tagline">COMMANDE SUR MESURE – QUALITÉ & FIABILITÉ GARANTIES</p>
            </div>
            
            <div class="footer-content">
                <p>Nos produits vedettes sont disponibles à la vente sur place selon le stock et également accessibles sur commande personnalisée, en fonction des besoins spécifiques de chaque client.</p>
                
                <div class="footer-contact">
                    <p><i class="fab fa-whatsapp"></i> <strong>WhatsApp:</strong> +243 82 293 7321</p>
                    <p><i class="fas fa-envelope"></i> <strong>Email:</strong> contact@lbksmart.com</p>
                    <p><i class="fas fa-map-marker-alt"></i> <strong>Adresse:</strong> Site Jolie RVA, Manika, Kolwezi, RDC</p>
                </div>
                
                <div class="footer-social">
                    <a href="#" class="social-icon"><i class="fab fa-tiktok"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                    <a href="https://lbksmart.com" class="social-icon"><i class="fas fa-globe"></i></a>
                </div>
                
                <div class="footer-copyright">
                    <p>&copy; 2026 LB-K SMART. Tous droits réservés.</p>
                    <p class="admin-access">
                        <button class="admin-access-btn" id="footerAdminBtn">
                            <i class="fas fa-user-shield"></i> Accès Admin
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    
    <!-- ===== ASSISTANCE FLOATING BUTTONS ===== -->
    <div class="floating-assistance">
        <button class="floating-btn whatsapp-float" id="whatsappFloatBtn">
            <i class="fab fa-whatsapp"></i>
            <span class="btn-label">WhatsApp</span>
        </button>
        
        <button class="floating-btn ai-float" id="aiFloatBtn">
            <i class="fas fa-robot"></i>
            <span class="btn-label">IA Assistant</span>
        </button>
        
        <button class="floating-btn admin-float" id="adminFloatBtn">
            <i class="fas fa-cogs"></i>
            <span class="btn-label">Admin</span>
        </button>
    </div>
    
    <!-- ===== MODAL ADMIN ===== -->
    <div class="admin-modal-overlay" id="adminModal">
        <div class="admin-modal-content">
            <div class="admin-modal-header">
                <h3><i class="fas fa-user-shield"></i> PANEL ADMINISTRATION LB-K SMART</h3>
                <button class="admin-modal-close" id="adminModalClose">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="admin-modal-body">
                <!-- Formulaire de connexion -->
                <div class="admin-login-section" id="adminLoginSection">
                    <h4><i class="fas fa-lock"></i> CONNEXION ADMIN</h4>
                    <div class="login-form">
                        <div class="form-group">
                            <label for="adminPassword">Mot de passe</label>
                            <input type="password" id="adminPassword" placeholder="Mot de passe par défaut: 123">
                            <div class="password-info">
                                <p><strong>Mot de passe par défaut:</strong> 123</p>
                                <p><small>Vous pourrez le changer après votre première connexion</small></p>
                            </div>
                        </div>
                        
                        <div class="form-actions">
                            <button class="btn-login" id="adminLoginBtn">
                                <i class="fas fa-sign-in-alt"></i> Se connecter
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Panneau admin après connexion -->
                <div class="admin-panel-section" id="adminPanelSection" style="display: none;">
                    <div class="admin-header">
                        <h4><i class="fas fa-tachometer-alt"></i> PANEL DE GESTION</h4>
                        <button class="btn-change-password" id="changePasswordBtn">
                            <i class="fas fa-key"></i> Changer mot de passe
                        </button>
                    </div>
                    
                    <div class="admin-actions">
                        <button class="admin-action-btn" data-action="add-product">
                            <i class="fas fa-plus-circle"></i>
                            <span>Ajouter produit</span>
                        </button>
                        
                        <button class="admin-action-btn" data-action="edit-product">
                            <i class="fas fa-edit"></i>
                            <span>Modifier produit</span>
                        </button>
                        
                        <button class="admin-action-btn" data-action="delete-product">
                            <i class="fas fa-trash"></i>
                            <span>Supprimer produit</span>
                        </button>
                        
                        <button class="admin-action-btn" data-action="manage-images">
                            <i class="fas fa-images"></i>
                            <span>Gérer images</span>
                        </button>
                        
                        <button class="admin-action-btn" data-action="update-prices">
                            <i class="fas fa-dollar-sign"></i>
                            <span>Modifier prix</span>
                        </button>
                        
                        <button class="admin-action-btn" data-action="carousel-settings">
                            <i class="fas fa-sliders-h"></i>
                            <span>Carrousel</span>
                        </button>
                        
                        <button class="admin-action-btn" data-action="site-settings">
                            <i class="fas fa-cog"></i>
                            <span>Réglages site</span>
                        </button>
                        
                        <button class="admin-action-btn" data-action="backup">
                            <i class="fas fa-save"></i>
                            <span>Sauvegarde</span>
                        </button>
                    </div>
                    
                    <div class="admin-stats">
                        <h5><i class="fas fa-chart-bar"></i> STATISTIQUES</h5>
                        <div class="stats-grid">
                            <div class="stat-item">
                                <span class="stat-label">Produits totaux:</span>
                                <span class="stat-value" id="totalProductsCount">54</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Catégories:</span>
                                <span class="stat-value" id="categoriesCount">12</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Dernière modif:</span>
                                <span class="stat-value" id="lastUpdate">Aujourd'hui</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="admin-logout">
                        <button class="btn-logout" id="adminLogoutBtn">
                            <i class="fas fa-sign-out-alt"></i> Déconnexion
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- ===== MODAL ÉDITION PRODUIT ===== -->
    <div class="edit-modal-overlay" id="editModal">
        <div class="edit-modal-content">
            <div class="edit-modal-header">
                <h3><i class="fas fa-edit"></i> MODIFIER LE PRODUIT</h3>
                <button class="edit-modal-close" id="editModalClose">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="edit-modal-body">
                <form id="productEditForm">
                    <div class="form-group">
                        <label for="editProductName">Nom du produit</label>
                        <input type="text" id="editProductName" required>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="editProductPriceUSD">Prix ($ USD)</label>
                            <input type="number" id="editProductPriceUSD" step="0.01" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="editProductPriceCDF">Prix (FC)</label>
                            <input type="number" id="editProductPriceCDF" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="editProductCategory">Catégorie</label>
                        <select id="editProductCategory" required>
                            <option value="">Sélectionner...</option>
                            <option value="habillement">Habillement</option>
                            <option value="cosmetiques">Cosmétiques</option>
                            <option value="menagers">Produits ménagers</option>
                            <option value="electromenager">Électroménager</option>
                            <option value="electriques">Accessoires électriques</option>
                            <option value="electroniques">Accessoires électroniques</option>
                            <option value="automobiles">Automobile</option>
                            <option value="pharmaceutiques">Pharmaceutiques</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="editProductDescription">Description</label>
                        <textarea id="editProductDescription" rows="3"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="editProductImage">Image (URL)</label>
                        <input type="url" id="editProductImage" placeholder="https://example.com/image.jpg">
                        <div class="image-preview" id="imagePreview"></div>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn-save">
                            <i class="fas fa-save"></i> Sauvegarder
                        </button>
                        <button type="button" class="btn-delete" id="deleteProductBtn">
                            <i class="fas fa-trash"></i> Supprimer
                        </button>
                        <button type="button" class="btn-cancel" id="cancelEditBtn">
                            <i class="fas fa-times"></i> Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <!-- ===== MODAL AJOUT PRODUIT ===== -->
    <div class="add-modal-overlay" id="addModal">
        <div class="add-modal-content">
            <div class="add-modal-header">
                <h3><i class="fas fa-plus-circle"></i> AJOUTER UN NOUVEAU PRODUIT</h3>
                <button class="add-modal-close" id="addModalClose">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="add-modal-body">
                <form id="productAddForm">
                    <div class="form-group">
                        <label for="addProductName">Nom du produit</label>
                        <input type="text" id="addProductName" required placeholder="Ex: T-shirt homme coton">
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="addProductPriceUSD">Prix ($ USD)</label>
                            <input type="number" id="addProductPriceUSD" step="0.01" required placeholder="Ex: 15.00">
                        </div>
                        
                        <div class="form-group">
                            <label for="addProductPriceCDF">Prix (FC)</label>
                            <input type="number" id="addProductPriceCDF" required placeholder="Ex: 30000">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="addProductCategory">Catégorie</label>
                        <select id="addProductCategory" required>
                            <option value="">Sélectionner...</option>
                            <option value="habillement">Habillement</option>
                            <option value="cosmetiques">Cosmétiques</option>
                            <option value="menagers">Produits ménagers</option>
                            <option value="electromenager">Électroménager</option>
                            <option value="electriques">Accessoires électriques</option>
                            <option value="electroniques">Accessoires électroniques</option>
                            <option value="automobiles">Automobile</option>
                            <option value="pharmaceutiques">Pharmaceutiques</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="addProductDescription">Description</label>
                        <textarea id="addProductDescription" rows="3" placeholder="Description du produit..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="addProductImage">Image (URL)</label>
                        <input type="url" id="addProductImage" placeholder="https://example.com/image.jpg">
                        <small>Vous pourrez ajouter une image plus tard via l'admin</small>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn-save">
                            <i class="fas fa-save"></i> Ajouter le produit
                        </button>
                        <button type="button" class="btn-cancel" id="cancelAddBtn">
                            <i class="fas fa-times"></i> Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <!-- ===== MODAL ASSISTANT IA ===== -->
    <div class="ai-modal-overlay" id="aiModal">
        <div class="ai-modal-content">
            <div class="ai-modal-header">
                <h3><i class="fas fa-robot"></i> ASSISTANT IA LB-K SMART</h3>
                <button class="ai-modal-close" id="aiModalClose">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="ai-modal-body">
                <div class="ai-welcome">
                    <p><strong>Bonjour ! Je suis l'assistant IA de LB-K SMART.</strong></p>
                    <p>Je peux vous aider à:</p>
                    <ul>
                        <li>Répondre à vos questions sur nos produits</li>
                        <li>Vous guider dans le processus de commande</li>
                        <li>Vous informer sur les prix et disponibilités</li>
                        <li>Calculer les frais de livraison</li>
                    </ul>
                </div>
                
                <div class="ai-chat">
                    <div class="ai-messages" id="aiMessages"></div>
                    
                    <div class="ai-input-container">
                        <input type="text" id="aiInput" placeholder="Posez votre question ici...">
                        <button id="aiSendBtn">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- ===== NOTIFICATIONS ===== -->
    <div class="notification-container" id="notificationContainer"></div>
    
    <!-- ===== SCRIPTS ===== -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/admin-panel.js"></script>
    <script src="assets/js/whatsapp-engine.js"></script>
    <script src="assets/js/ai-assistant.js"></script>
    
    <!-- Service Worker pour PWA -->
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('service-worker.js')
                    .then(function(registration) {
                        console.log('ServiceWorker enregistré avec succès: ', registration.scope);
                    })
                    .catch(function(err) {
                        console.log('Échec enregistrement ServiceWorker: ', err);
                    });
            });
        }
    </script>
</body>
</html>
