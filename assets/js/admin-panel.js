// ============================================
// LB-K SMART 2026 - ADMIN PANEL AVEC MODIFICATION
// Mot de passe par défaut: 123
// ============================================

class AdminPanelLBK {
    constructor() {
        this.defaultPassword = '123';
        this.currentPassword = this.defaultPassword;
        this.isLoggedIn = false;
        this.currentProductId = null;
        this.products = this.loadProducts();
        
        this.init();
    }
    
    init() {
        this.loadAdminState();
        this.setupEventListeners();
        this.updateProductCounters();
    }
    
    loadProducts() {
        // Charger les produits depuis localStorage ou utiliser les produits par défaut
        const savedProducts = localStorage.getItem('lbk_products');
        if (savedProducts) {
            return JSON.parse(savedProducts);
        }
        
        // Produits par défaut selon le cahier des charges
        const defaultProducts = [
            // Habits Homme (IDs 1-10)
            { id: 1, name: "T-shirts, polos et chemises", category: "habillement", priceUSD: 15, priceCDF: 30000, description: "T-shirts, polos et chemises homme de qualité", image: "" },
            { id: 2, name: "Pantalons, jeans et shorts", category: "habillement", priceUSD: 25, priceCDF: 50000, description: "Pantalons, jeans et shorts homme", image: "" },
            { id: 3, name: "Ensembles et tenues décontractées", category: "habillement", priceUSD: 40, priceCDF: 80000, description: "Ensembles décontractés homme", image: "" },
            { id: 4, name: "Vestes et blousons", category: "habillement", priceUSD: 35, priceCDF: 70000, description: "Vestes et blousons homme", image: "" },
            { id: 5, name: "Sous-vêtements et vêtements confort", category: "habillement", priceUSD: 10, priceCDF: 20000, description: "Sous-vêtements homme", image: "" },
            { id: 6, name: "Montres et bracelets", category: "accessoires", priceUSD: 50, priceCDF: 100000, description: "Montres et bracelets homme", image: "" },
            { id: 7, name: "Ceintures et portefeuilles", category: "accessoires", priceUSD: 20, priceCDF: 40000, description: "Ceintures et portefeuilles homme", image: "" },
            { id: 8, name: "Lunettes de soleil", category: "accessoires", priceUSD: 30, priceCDF: 60000, description: "Lunettes de soleil homme", image: "" },
            { id: 9, name: "Chaussures et sandales", category: "habillement", priceUSD: 40, priceCDF: 80000, description: "Chaussures et sandales homme", image: "" },
            { id: 10, name: "Parfums homme", category: "cosmetiques", priceUSD: 60, priceCDF: 120000, description: "Parfums pour homme", image: "" },
            
            // Habits Femme (IDs 11-20)
            { id: 11, name: "Robes (courtes, longues, soirée)", category: "habillement", priceUSD: 45, priceCDF: 90000, description: "Robes femme variées", image: "" },
            { id: 12, name: "Ensembles et tenues chic", category: "habillement", priceUSD: 50, priceCDF: 100000, description: "Ensembles chic femme", image: "" },
            { id: 13, name: "Jupes, pantalons et jeans", category: "habillement", priceUSD: 30, priceCDF: 60000, description: "Jupes et pantalons femme", image: "" },
            { id: 14, name: "T-shirts, tops et chemisiers", category: "habillement", priceUSD: 20, priceCDF: 40000, description: "Tops et chemisiers femme", image: "" },
            { id: 15, name: "Sous-vêtements et vêtements de confort", category: "habillement", priceUSD: 15, priceCDF: 30000, description: "Sous-vêtements femme", image: "" },
            { id: 16, name: "Sacs à main et pochettes", category: "accessoires", priceUSD: 40, priceCDF: 80000, description: "Sacs à main femme", image: "" },
            { id: 17, name: "Montres et bijoux (colliers, bracelets, bagues)", category: "accessoires", priceUSD: 25, priceCDF: 50000, description: "Bijoux femme", image: "" },
            { id: 18, name: "Lunettes de soleil", category: "accessoires", priceUSD: 35, priceCDF: 70000, description: "Lunettes de soleil femme", image: "" },
            { id: 19, name: "Chaussures et sandales", category: "habillement", priceUSD: 45, priceCDF: 90000, description: "Chaussures femme", image: "" },
            { id: 20, name: "Parfums femme", category: "cosmetiques", priceUSD: 65, priceCDF: 130000, description: "Parfums pour femme", image: "" },
            
            // Autres produits (IDs 21-54)
            { id: 21, name: "Groupes solaires", category: "electriques", priceUSD: 500, priceCDF: 1000000, description: "Solutions énergétiques performantes", image: "" },
            { id: 22, name: "Panneaux solaires", category: "electriques", priceUSD: 300, priceCDF: 600000, description: "Énergie propre et économique", image: "" },
            { id: 23, name: "Prises et multiprises électriques", category: "electriques", priceUSD: 10, priceCDF: 20000, description: "Prises électriques de qualité", image: "" },
            { id: 24, name: "Écouteurs filaires et Bluetooth", category: "electroniques", priceUSD: 25, priceCDF: 50000, description: "Écouteurs haute qualité", image: "" },
            { id: 25, name: "Power banks haute capacité", category: "electroniques", priceUSD: 40, priceCDF: 80000, description: "Power banks puissantes", image: "" },
            { id: 26, name: "Chargeurs rapides USB / Type-C", category: "electroniques", priceUSD: 15, priceCDF: 30000, description: "Chargeurs rapides", image: "" },
            { id: 27, name: "Montres et bracelets intelligents", category: "electroniques", priceUSD: 80, priceCDF: 160000, description: "Montres intelligentes", image: "" },
            { id: 28, name: "Lunettes et bagues intelligentes", category: "electroniques", priceUSD: 100, priceCDF: 200000, description: "Accessoires intelligents", image: "" },
            { id: 29, name: "Ordinateurs et accessoires informatiques", category: "electroniques", priceUSD: 600, priceCDF: 1200000, description: "Matériel informatique", image: "" },
            { id: 30, name: "Salon: ventilateurs, lampes et accessoires", category: "electromenager", priceUSD: 50, priceCDF: 100000, description: "Accessoires salon", image: "" },
            { id: 31, name: "Cuisine: mixeurs, plaques et petits appareils", category: "electromenager", priceUSD: 70, priceCDF: 140000, description: "Appareils cuisine", image: "" },
            { id: 32, name: "Chambre: lampes, ventilateurs et accessoires", category: "electromenager", priceUSD: 40, priceCDF: 80000, description: "Accessoires chambre", image: "" },
            { id: 33, name: "Parfums pour véhicules", category: "automobiles", priceUSD: 5, priceCDF: 10000, description: "Parfums auto", image: "" },
            { id: 34, name: "Tapis, housses de sièges et textiles auto", category: "automobiles", priceUSD: 30, priceCDF: 60000, description: "Accessoires textiles auto", image: "" },
            { id: 35, name: "Radios tactiles, caméras et alarmes", category: "automobiles", priceUSD: 150, priceCDF: 300000, description: "Électronique auto", image: "" },
            { id: 36, name: "Pièces automobiles (Ford, Toyota, Mazda, Mercedes, etc.)", category: "automobiles", priceUSD: 200, priceCDF: 400000, description: "Pièces détachées auto", image: "" },
            { id: 37, name: "Détergents multi-surfaces", category: "menagers", priceUSD: 8, priceCDF: 16000, description: "Détergents ménagers", image: "" },
            { id: 38, name: "Savon liquide vaisselle", category: "menagers", priceUSD: 5, priceCDF: 10000, description: "Savon vaisselle", image: "" },
            { id: 39, name: "Désinfectants multi-usages", category: "menagers", priceUSD: 7, priceCDF: 14000, description: "Désinfectants", image: "" },
            { id: 40, name: "Javel blanche", category: "menagers", priceUSD: 3, priceCDF: 6000, description: "Javel ménagère", image: "" },
            { id: 41, name: "Éponges et chiffons microfibres", category: "menagers", priceUSD: 2, priceCDF: 4000, description: "Accessoires nettoyage", image: "" },
            { id: 42, name: "Spray vitres", category: "menagers", priceUSD: 6, priceCDF: 12000, description: "Nettoyant vitres", image: "" },
            { id: 43, name: "Poudre à laver", category: "menagers", priceUSD: 10, priceCDF: 20000, description: "Lessive en poudre", image: "" },
            { id: 44, name: "Savon doux pour le corps", category: "cosmetiques", priceUSD: 4, priceCDF: 8000, description: "Savon corps", image: "" },
            { id: 45, name: "Crème hydratante", category: "cosmetiques", priceUSD: 12, priceCDF: 24000, description: "Crème hydratante", image: "" },
            { id: 46, name: "Gel douche parfumé", category: "cosmetiques", priceUSD: 8, priceCDF: 16000, description: "Gel douche", image: "" },
            { id: 47, name: "Shampoing revitalisant", category: "cosmetiques", priceUSD: 10, priceCDF: 20000, description: "Shampoing", image: "" },
            { id: 48, name: "Lait corporel nourrissant", category: "cosmetiques", priceUSD: 15, priceCDF: 30000, description: "Lait corporel", image: "" },
            { id: 49, name: "Déodorant roll-on", category: "cosmetiques", priceUSD: 6, priceCDF: 12000, description: "Déodorant", image: "" },
            { id: 50, name: "Brosses et peignes", category: "cosmetiques", priceUSD: 5, priceCDF: 10000, description: "Accessoires coiffure", image: "" },
            { id: 51, name: "Produits dentaires", category: "pharmaceutiques", priceUSD: 7, priceCDF: 14000, description: "Produits d'hygiène dentaire", image: "" },
            { id: 52, name: "Produits pour l'estomac", category: "pharmaceutiques", priceUSD: 15, priceCDF: 30000, description: "Produits gastro-intestinaux", image: "" },
            { id: 53, name: "Produits hémorroïdaires", category: "pharmaceutiques", priceUSD: 20, priceCDF: 40000, description: "Traitements hémorroïdaires", image: "" },
            { id: 54, name: "Produits pour la tension artérielle", category: "pharmaceutiques", priceUSD: 25, priceCDF: 50000, description: "Produits cardiovasculaires", image: "" }
        ];
        
        localStorage.setItem('lbk_products', JSON.stringify(defaultProducts));
        return defaultProducts;
    }
    
    saveProducts() {
        localStorage.setItem('lbk_products', JSON.stringify(this.products));
    }
    
    loadAdminState() {
        const savedPassword = localStorage.getItem('lbk_admin_password');
        if (savedPassword) {
            this.currentPassword = savedPassword;
        }
        
        const loggedIn = localStorage.getItem('lbk_admin_logged_in');
        if (loggedIn === 'true') {
            this.isLoggedIn = true;
            this.showAdminPanel();
        }
    }
    
    setupEventListeners() {
        // Navigation hamburger
        document.getElementById('hamburgerBtn')?.addEventListener('click', () => {
            document.getElementById('hiddenNavbar').classList.add('active');
        });
        
        document.getElementById('navCloseBtn')?.addEventListener('click', () => {
            document.getElementById('hiddenNavbar').classList.remove('active');
        });
        
        // Boutons assistance
        document.querySelectorAll('.nav-assist-btn, .floating-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.currentTarget.classList.contains('whatsapp-assist') || 
                             e.currentTarget.classList.contains('whatsapp-float') ? 'whatsapp' :
                             e.currentTarget.classList.contains('ai-assist') || 
                             e.currentTarget.classList.contains('ai-float') ? 'ai' : 'admin';
                
                if (type === 'whatsapp') {
                    this.openWhatsApp();
                } else if (type === 'ai') {
                    this.openAI();
                } else {
                    this.openAdmin();
                }
            });
        });
        
        // Boutons admin dans le footer
        document.getElementById('footerAdminBtn')?.addEventListener('click', () => {
            this.openAdmin();
        });
        
        // Connexion admin
        document.getElementById('adminLoginBtn')?.addEventListener('click', () => {
            this.loginAdmin();
        });
        
        // Changer mot de passe
        document.getElementById('changePasswordBtn')?.addEventListener('click', () => {
            this.changePassword();
        });
        
        // Déconnexion admin
        document.getElementById('adminLogoutBtn')?.addEventListener('click', () => {
            this.logoutAdmin();
        });
        
        // Fermer les modaux
        document.getElementById('adminModalClose')?.addEventListener('click', () => {
            this.closeAdminModal();
        });
        
        document.getElementById('editModalClose')?.addEventListener('click', () => {
            this.closeEditModal();
        });
        
        document.getElementById('addModalClose')?.addEventListener('click', () => {
            this.closeAddModal();
        });
        
        document.getElementById('aiModalClose')?.addEventListener('click', () => {
            this.closeAIModal();
        });
        
        // Annuler édition/ajout
        document.getElementById('cancelEditBtn')?.addEventListener('click', () => {
            this.closeEditModal();
        });
        
        document.getElementById('cancelAddBtn')?.addEventListener('click', () => {
            this.closeAddModal();
        });
        
        // Boutons d'édition des produits
        document.querySelectorAll('.edit-product-btn, .edit-btn-small').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.id);
                this.openEditModal(productId);
            });
        });
        
        // Formulaire d'édition
        document.getElementById('productEditForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveProductEdit();
        });
        
        // Bouton supprimer produit
        document.getElementById('deleteProductBtn')?.addEventListener('click', () => {
            if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
                this.deleteProduct();
            }
        });
        
        // Actions admin
        document.querySelectorAll('.admin-action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                this.handleAdminAction(action);
            });
        });
        
        // Formulaire d'ajout
        document.getElementById('productAddForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveNewProduct();
        });
        
        // Tabs habillement homme/femme
        document.querySelectorAll('.gender-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const gender = e.currentTarget.dataset.gender;
                this.switchGenderTab(gender);
            });
        });
        
        // Carrousel
        this.initCarousel();
        
        // Fermer modaux en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('admin-modal-overlay')) {
                this.closeAdminModal();
            }
            if (e.target.classList.contains('edit-modal-overlay')) {
                this.closeEditModal();
            }
            if (e.target.classList.contains('add-modal-overlay')) {
                this.closeAddModal();
            }
            if (e.target.classList.contains('ai-modal-overlay')) {
                this.closeAIModal();
            }
        });
        
        // Raccourci clavier pour admin (Ctrl+Shift+A)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'A') {
                e.preventDefault();
                this.openAdmin();
            }
        });
    }
    
    openAdmin() {
        const modal = document.getElementById('adminModal');
        if (this.isLoggedIn) {
            this.showAdminPanel();
        } else {
            this.showLoginForm();
        }
        modal.style.display = 'flex';
    }
    
    closeAdminModal() {
        document.getElementById('adminModal').style.display = 'none';
    }
    
    openEditModal(productId) {
        if (!this.isLoggedIn) {
            this.showNotification('Veuillez vous connecter en tant qu\'admin', 'error');
            this.openAdmin();
            return;
        }
        
        this.currentProductId = productId;
        const product = this.products.find(p => p.id === productId);
        
        if (!product) {
            this.showNotification('Produit non trouvé', 'error');
            return;
        }
        
        // Remplir le formulaire
        document.getElementById('editProductName').value = product.name;
        document.getElementById('editProductPriceUSD').value = product.priceUSD;
        document.getElementById('editProductPriceCDF').value = product.priceCDF;
        document.getElementById('editProductCategory').value = product.category;
        document.getElementById('editProductDescription').value = product.description || '';
        document.getElementById('editProductImage').value = product.image || '';
        
        // Afficher l'aperçu de l'image
        const imagePreview = document.getElementById('imagePreview');
        if (product.image) {
            imagePreview.innerHTML = `<img src="${product.image}" alt="Aperçu">`;
        } else {
            imagePreview.innerHTML = '<i class="fas fa-image"></i><br><small>Aucune image</small>';
        }
        
        // Ouvrir le modal
        document.getElementById('editModal').style.display = 'flex';
    }
    
    closeEditModal() {
        document.getElementById('editModal').style.display = 'none';
        this.currentProductId = null;
    }
    
    openAddModal() {
        if (!this.isLoggedIn) {
            this.showNotification('Veuillez vous connecter en tant qu\'admin', 'error');
            this.openAdmin();
            return;
        }
        
        // Réinitialiser le formulaire
        document.getElementById('productAddForm').reset();
        document.getElementById('addModal').style.display = 'flex';
    }
    
    closeAddModal() {
        document.getElementById('addModal').style.display = 'none';
    }
    
    openAI() {
        document.getElementById('aiModal').style.display = 'flex';
    }
    
    closeAIModal() {
        document.getElementById('aiModal').style.display = 'none';
    }
    
    openWhatsApp() {
        const message = encodeURIComponent("Bonjour LB-K SMART !\n\nJe souhaite me renseigner sur vos produits.\n\nMerci de me répondre !");
        window.open(`https://wa.me/243822937321?text=${message}`, '_blank');
    }
    
    loginAdmin() {
        const passwordInput = document.getElementById('adminPassword');
        const enteredPassword = passwordInput.value.trim();
        
        if (enteredPassword === this.currentPassword) {
            this.isLoggedIn = true;
            localStorage.setItem('lbk_admin_logged_in', 'true');
            this.showNotification('Connexion admin réussie !', 'success');
            this.showAdminPanel();
        } else {
            this.showNotification('Mot de passe incorrect', 'error');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }
    
    logoutAdmin() {
        this.isLoggedIn = false;
        localStorage.removeItem('lbk_admin_logged_in');
        this.showNotification('Déconnexion réussie', 'success');
        this.showLoginForm();
    }
    
    changePassword() {
        const oldPassword = prompt('Entrez l\'ancien mot de passe:');
        if (oldPassword !== this.currentPassword) {
            this.showNotification('Ancien mot de passe incorrect', 'error');
            return;
        }
        
        const newPassword = prompt('Nouveau mot de passe (min. 3 caractères):');
        if (!newPassword || newPassword.length < 3) {
            this.showNotification('Le mot de passe doit avoir au moins 3 caractères', 'error');
            return;
        }
        
        const confirmPassword = prompt('Confirmez le nouveau mot de passe:');
        if (newPassword !== confirmPassword) {
            this.showNotification('Les mots de passe ne correspondent pas', 'error');
            return;
        }
        
        this.currentPassword = newPassword;
        localStorage.setItem('lbk_admin_password', newPassword);
        this.showNotification('Mot de passe changé avec succès !', 'success');
    }
    
    showLoginForm() {
        document.getElementById('adminLoginSection').style.display = 'block';
        document.getElementById('adminPanelSection').style.display = 'none';
    }
    
    showAdminPanel() {
        document.getElementById('adminLoginSection').style.display = 'none';
        document.getElementById('adminPanelSection').style.display = 'block';
        this.updateProductCounters();
    }
    
    saveProductEdit() {
        const productId = this.currentProductId;
        const productIndex = this.products.findIndex(p => p.id === productId);
        
        if (productIndex === -1) {
            this.showNotification('Produit non trouvé', 'error');
            return;
        }
        
        // Mettre à jour le produit
        this.products[productIndex] = {
            ...this.products[productIndex],
            name: document.getElementById('editProductName').value,
            priceUSD: parseFloat(document.getElementById('editProductPriceUSD').value),
            priceCDF: parseInt(document.getElementById('editProductPriceCDF').value),
            category: document.getElementById('editProductCategory').value,
            description: document.getElementById('editProductDescription').value,
            image: document.getElementById('editProductImage').value
        };
        
        this.saveProducts();
        this.updateProductDisplay(productId);
        this.updateProductCounters();
        
        this.showNotification('Produit modifié avec succès !', 'success');
        this.closeEditModal();
    }
    
    deleteProduct() {
        const productId = this.currentProductId;
        this.products = this.products.filter(p => p.id !== productId);
        
        this.saveProducts();
        this.removeProductDisplay(productId);
        this.updateProductCounters();
        
        this.showNotification('Produit supprimé avec succès', 'success');
        this.closeEditModal();
    }
    
    saveNewProduct() {
        const newId = Math.max(...this.products.map(p => p.id)) + 1;
        
        const newProduct = {
            id: newId,
            name: document.getElementById('addProductName').value,
            priceUSD: parseFloat(document.getElementById('addProductPriceUSD').value),
            priceCDF: parseInt(document.getElementById('addProductPriceCDF').value),
            category: document.getElementById('addProductCategory').value,
            description: document.getElementById('addProductDescription').value,
            image: document.getElementById('addProductImage').value || ''
        };
        
        this.products.push(newProduct);
        this.saveProducts();
        this.addProductDisplay(newProduct);
        this.updateProductCounters();
        
        this.showNotification('Produit ajouté avec succès !', 'success');
        this.closeAddModal();
    }
    
    handleAdminAction(action) {
        switch(action) {
            case 'add-product':
                this.openAddModal();
                break;
                
            case 'edit-product':
                this.showNotification('Cliquez sur le bouton d\'édition d\'un produit', 'info');
                break;
                
            case 'delete-product':
                this.showNotification('Cliquez sur le bouton d\'édition puis supprimez', 'info');
                break;
                
            case 'manage-images':
                this.manageImages();
                break;
                
            case 'update-prices':
                this.updatePrices();
                break;
                
            case 'carousel-settings':
                this.carouselSettings();
                break;
                
            case 'site-settings':
                this.siteSettings();
                break;
                
            case 'backup':
                this.createBackup();
                break;
        }
    }
    
    manageImages() {
        const imageUrls = prompt('Entrez les URLs d\'images séparées par des virgules:');
        if (imageUrls) {
            const urls = imageUrls.split(',').map(url => url.trim());
            localStorage.setItem('lbk_carousel_images', JSON.stringify(urls));
            this.initCarousel();
            this.showNotification('Images du carrousel mises à jour', 'success');
        }
    }
    
    updatePrices() {
        const increasePercent = parseFloat(prompt('Pourcentage d\'augmentation (ex: 10 pour 10%):'));
        if (isNaN(increasePercent)) return;
        
        const factor = 1 + (increasePercent / 100);
        
        this.products.forEach(product => {
            product.priceUSD = parseFloat((product.priceUSD * factor).toFixed(2));
            product.priceCDF = Math.round(product.priceCDF * factor);
        });
        
        this.saveProducts();
        this.updateAllProductDisplays();
        this.showNotification(`Prix augmentés de ${increasePercent}%`, 'success');
    }
    
    carouselSettings() {
        const speed = prompt('Vitesse du carrousel (secondes, 3-10):', '5');
        if (speed >= 3 && speed <= 10) {
            localStorage.setItem('lbk_carousel_speed', speed);
            this.initCarousel();
            this.showNotification('Vitesse du carrousel mise à jour', 'success');
        }
    }
    
    siteSettings() {
        const theme = confirm('Activer le mode sombre?') ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('lbk_theme', theme);
        this.showNotification('Thème mis à jour', 'success');
    }
    
    createBackup() {
        const backupData = {
            products: this.products,
            settings: {
                password: this.currentPassword,
                theme: localStorage.getItem('lbk_theme') || 'light',
                carouselSpeed: localStorage.getItem('lbk_carousel_speed') || '5',
                carouselImages: JSON.parse(localStorage.getItem('lbk_carousel_images') || '[]')
            },
            timestamp: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `lbk-backup-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showNotification('Sauvegarde créée avec succès', 'success');
    }
    
    updateProductCounters() {
        document.getElementById('totalProductsCount').textContent = this.products.length;
        
        const categories = [...new Set(this.products.map(p => p.category))];
        document.getElementById('categoriesCount').textContent = categories.length;
        
        document.getElementById('lastUpdate').textContent = new Date().toLocaleTimeString('fr-FR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
    
    updateProductDisplay(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;
        
        // Mettre à jour dans la liste des produits
        const productElement = document.querySelector(`[data-product-id="${productId}"] .product-name`);
        if (productElement) {
            productElement.textContent = product.name;
        }
        
        const editBtn = document.querySelector(`[data-product-id="${productId}"] .edit-product-btn, [data-product-id="${productId}"] .edit-btn-small`);
        if (editBtn) {
            editBtn.dataset.id = productId;
        }
    }
    
    removeProductDisplay(productId) {
        const productElement = document.querySelector(`[data-product-id="${productId}"]`);
        if (productElement) {
            productElement.remove();
        }
    }
    
    addProductDisplay(product) {
        // À implémenter selon l'endroit où ajouter le produit
        this.showNotification(`Produit "${product.name}" ajouté`, 'success');
    }
    
    updateAllProductDisplays() {
        this.products.forEach(product => {
            this.updateProductDisplay(product.id);
        });
    }
    
    switchGenderTab(gender) {
        // Mettre à jour les tabs
        document.querySelectorAll('.gender-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        document.querySelector(`.gender-tab[data-gender="${gender}"]`).classList.add('active');
        
        // Mettre à jour le contenu
        document.querySelectorAll('.gender-content').forEach(content => {
            content.classList.remove('active');
        });
        
        document.getElementById(`${gender}Content`).classList.add('active');
    }
    
    initCarousel() {
        const carouselSlides = document.getElementById('carouselSlides');
        const carouselDots = document.getElementById('carouselDots');
        
        if (!carouselSlides || !carouselDots) return;
        
        // Charger les images du carrousel
        let images = JSON.parse(localStorage.getItem('lbk_carousel_images') || '[]');
        
        // Images par défaut si aucune n'est configurée
        if (images.length === 0) {
            images = [
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
                'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80'
            ];
        }
        
        // Vider le carrousel
        carouselSlides.innerHTML = '';
        carouselDots.innerHTML = '';
        
        // Ajouter les slides
        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${image}')`;
            slide.style.backgroundSize = 'cover';
            slide.style.backgroundPosition = 'center';
            slide.innerHTML = `<div>LB-K SMART - Produit ${index + 1}</div>`;
            carouselSlides.appendChild(slide);
            
            // Ajouter un dot
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.index = index;
            carouselDots.appendChild(dot);
        });
        
        // Configurer le carrousel
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');
        const speed = parseInt(localStorage.getItem('lbk_carousel_speed') || '5') * 1000;
        
        function showSlide(index) {
            carouselSlides.style.transform = `translateX(-${index * 100}%)`;
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index]?.classList.add('active');
            
            currentSlide = index;
        }
        
        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }
        
        // Boutons précédent/suivant
        document.querySelector('.prev-btn')?.addEventListener('click', () => {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
        });
        
        document.querySelector('.next-btn')?.addEventListener('click', () => {
            nextSlide();
        });
        
        // Dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index);
                showSlide(index);
            });
        });
        
        // Auto-play
        let interval = setInterval(nextSlide, speed);
        
        // Pause au survol
        carouselSlides.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        
        carouselSlides.addEventListener('mouseleave', () => {
            interval = setInterval(nextSlide, speed);
        });
    }
    
    showNotification(message, type = 'info') {
        const container = document.getElementById('notificationContainer');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
        `;
        
        container.appendChild(notification);
        
        // Supprimer après 5 secondes
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    getNotificationIcon(type) {
        switch(type) {
            case 'success': return 'check-circle';
            case 'error': return 'exclamation-circle';
            case 'warning': return 'exclamation-triangle';
            default: return 'info-circle';
        }
    }
}

// ============================================
// INITIALISATION
// ============================================

// Initialiser quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    window.lbkAdmin = new AdminPanelLBK();
    
    // Appliquer le thème sauvegardé
    const savedTheme = localStorage.getItem('lbk_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
});
