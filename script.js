// ==================== КОНСТАНТЫ И НАЧАЛЬНЫЕ ДАННЫЕ ====================

// Константы для приложения
const ORDER_TYPES = {
    server: 'Сервер',
    desktop: 'Настольный',
    laptop: 'Портативный',
    tablet: 'Планшет'
};

const ORDER_STATUSES = {
    pending: { name: 'Ожидает оплаты', color: '#ffeb3b' },
    processing: { name: 'В обработке', color: '#ff9800' },
    assembling: { name: 'Собирается', color: '#2196f3' },
    installing: { name: 'Установка ПО', color: '#9c27b0' },
    shipped: { name: 'Отправлен', color: '#3f51b5' },
    delivered: { name: 'Доставлен', color: '#4caf50' },
    completed: { name: 'Выполнен', color: '#009688' },
    cancelled: { name: 'Отменен', color: '#f44336' }
};

const PAYMENT_METHODS = {
    cash: 'Наличные курьеру',
    bank: 'Банковский перевод'
};

// Пользователи системы
const USERS = {
    client_1: {
        id: 'client_1',
        name: 'Иван Петров',
        role: 'client',
        email: 'ivan.petrov@example.com'
    },
    client_2: {
        id: 'client_2',
        name: 'Мария Сидорова',
        role: 'client',
        email: 'maria.sidorova@example.com'
    },
    manager_1: {
        id: 'manager_1',
        name: 'Алексей Смирнов',
        role: 'manager',
        email: 'alexey.smirnov@store.com'
    },
    manager_2: {
        id: 'manager_2',
        name: 'Ольга Ковалева',
        role: 'manager',
        email: 'olga.kovaleva@store.com'
    }
};

// КАТАЛОГ компьютеров (для выбора клиентами)
const COMPUTER_CATALOG = [
    {
        id: 'CAT001',
        type: 'desktop',
        model: 'Gaming Pro Xtreme',
        description: 'Игровой компьютер с RGB подсветкой для профессиональных геймеров',
        cpu: 'Intel Core i9-13900K',
        ram: 32,
        storage: 2000,
        price: 189999,
        specs: ['NVIDIA RTX 4090', 'Жидкостное охлаждение', 'Wi-Fi 6E'],
        inStock: true,
        warranty: '24 месяца'
    },
    {
        id: 'CAT002',
        type: 'laptop',
        model: 'UltraBook Pro 14',
        description: 'Ультрабук для бизнеса с длительным временем работы',
        cpu: 'Apple M2 Pro',
        ram: 16,
        storage: 512,
        price: 249999,
        specs: ['Retina дисплей', 'До 18 часов работы', 'Touch ID'],
        inStock: true,
        warranty: '12 месяцев'
    },
    {
        id: 'CAT003',
        type: 'server',
        model: 'DataCenter Rack 2U',
        description: 'Сервер для малого и среднего бизнеса',
        cpu: '2x Intel Xeon Silver 4310',
        ram: 64,
        storage: 8000,
        price: 450000,
        specs: ['RAID контроллер', 'Двойные блоки питания', 'IPMI'],
        inStock: true,
        warranty: '36 месяцев'
    },
    {
        id: 'CAT004',
        type: 'tablet',
        model: 'Tab Pro 12.9',
        description: 'Планшет для графики и дизайна с стилусом',
        cpu: 'Apple M1',
        ram: 8,
        storage: 256,
        price: 89999,
        specs: ['Liquid Retina XDR', 'Apple Pencil поддержка', '5G'],
        inStock: true,
        warranty: '12 месяцев'
    },
    {
        id: 'CAT005',
        type: 'desktop',
        model: 'Office Master',
        description: 'Надежный компьютер для офисной работы',
        cpu: 'Intel Core i5-13400',
        ram: 16,
        storage: 512,
        price: 65999,
        specs: ['Встроенная графика', 'Безшумное охлаждение', '6 USB портов'],
        inStock: true,
        warranty: '12 месяцев'
    },
    {
        id: 'CAT006',
        type: 'laptop',
        model: 'Student Basic 14',
        description: 'Ноутбук для студентов и учебы',
        cpu: 'Intel Core i3-1215U',
        ram: 8,
        storage: 256,
        price: 44999,
        specs: ['Full HD дисплей', 'HDMI выход', 'Веб-камера'],
        inStock: true,
        warranty: '12 месяцев'
    },
    {
        id: 'CAT007',
        type: 'server',
        model: 'Web Server Lite',
        description: 'Сервер для хостинга и веб-приложений',
        cpu: 'Intel Xeon E-2314',
        ram: 16,
        storage: 2000,
        price: 165000,
        specs: ['Гарантия 99.9% uptime', 'Бесплатная установка ОС', 'Техподдержка 24/7'],
        inStock: true,
        warranty: '24 месяца'
    },
    {
        id: 'CAT008',
        type: 'tablet',
        model: 'EduTab 10',
        description: 'Планшет для образования с защищенным корпусом',
        cpu: 'Snapdragon 870',
        ram: 6,
        storage: 128,
        price: 34999,
        specs: ['Защита от падения', 'Родительский контроль', 'Образовательные приложения'],
        inStock: true,
        warranty: '12 месяцев'
    },
    {
        id: 'CAT009',
        type: 'desktop',
        model: 'Mini PC Pro',
        description: 'Компактный ПК для дома и офиса',
        cpu: 'Intel Core i7-13700',
        ram: 32,
        storage: 1000,
        price: 119999,
        specs: ['Размер 15x15x5 см', 'Поддержка 4K', 'Тихий вентилятор'],
        inStock: true,
        warranty: '12 месяцев'
    },
    {
        id: 'CAT010',
        type: 'laptop',
        model: 'Business Elite 15',
        description: 'Бизнес-ноутбук премиум класса с защитой данных',
        cpu: 'Intel Core i7-1360P',
        ram: 16,
        storage: 1024,
        price: 179999,
        specs: ['Сканер отпечатков', 'TPM модуль', 'Порт Thunderbolt 4'],
        inStock: true,
        warranty: '24 месяца'
    }
];

// Начальные данные заказов (для менеджеров)
const INITIAL_ORDERS = [
    {
        id: 'ORD001',
        type: 'desktop',
        model: 'Gaming Pro Xtreme',
        description: 'Игровой компьютер с RGB подсветкой',
        cpu: 'Intel Core i9-13900K',
        ram: 32,
        storage: 2000,
        price: 189999,
        software: 'Windows 11 Pro, Steam, Discord',
        deliveryAddress: 'г. Москва, ул. Тверская, д. 15, кв. 42',
        paymentMethod: 'bank',
        status: 'processing',
        createdAt: new Date('2024-01-15T10:30:00'),
        clientId: 'client_1',
        clientName: 'Иван Петров',
        managerId: 'manager_1',
        managerName: 'Алексей Смирнов'
    },
    {
        id: 'ORD002',
        type: 'laptop',
        model: 'UltraBook Pro 14',
        description: 'Ультрабук для бизнеса',
        cpu: 'Apple M2 Pro',
        ram: 16,
        storage: 512,
        price: 249999,
        software: 'macOS Ventura, Microsoft Office 365',
        deliveryAddress: 'г. Санкт-Петербург, Невский пр., д. 28',
        paymentMethod: 'cash',
        status: 'assembling',
        createdAt: new Date('2024-01-14T14:20:00'),
        clientId: 'client_2',
        clientName: 'Мария Сидорова',
        managerId: 'manager_2',
        managerName: 'Ольга Ковалева'
    }
];

// ==================== МОДЕЛЬ (Model) ====================

class OrderModel {
    constructor(initialData = []) {
        this._orders = new Map();
        this._nextId = 3; // Уже есть 2 начальных заказа
        
        // Загружаем из localStorage или инициализируем начальными данными
        this._loadFromStorage();
        
        if (initialData.length > 0 && this._orders.size === 0) {
            this._initializeData(initialData);
        }
    }

    // Приватные методы
    _loadFromStorage() {
        const saved = localStorage.getItem('computerStoreOrders');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                data.forEach(order => {
                    order.createdAt = new Date(order.createdAt);
                    this._orders.set(order.id, order);
                });
                this._updateNextId();
            } catch (e) {
                console.error('Ошибка загрузки из localStorage:', e);
            }
        }
    }

    _saveToStorage() {
        const data = Array.from(this._orders.values());
        localStorage.setItem('computerStoreOrders', JSON.stringify(data));
    }

    _updateNextId() {
        let maxId = 0;
        for (const id of this._orders.keys()) {
            const numId = parseInt(id.replace('ORD', ''));
            if (numId > maxId) {
                maxId = numId;
            }
        }
        this._nextId = maxId + 1;
    }

    _generateId() {
        const id = `ORD${this._nextId.toString().padStart(3, '0')}`;
        this._nextId++;
        return id;
    }

    _initializeData(initialData) {
        initialData.forEach(order => {
            this._orders.set(order.id, order);
        });
        this._updateNextId();
        this._saveToStorage();
    }

    _validateOrder(order, isEdit = false) {
        // Базовые обязательные поля
        const requiredFields = ['type', 'model', 'description', 'cpu', 'ram', 
                               'storage', 'price', 'deliveryAddress', 
                               'paymentMethod', 'clientId', 'clientName'];
        
        if (!isEdit) {
            for (const field of requiredFields) {
                if (!order[field] && order[field] !== 0) {
                    return false;
                }
            }
        }

        // Проверка типов данных и ограничений
        if (order.description && order.description.length > 200) {
            return false;
        }

        if (order.ram && (typeof order.ram !== 'number' || order.ram < 1)) {
            return false;
        }

        if (order.storage && (typeof order.storage !== 'number' || order.storage < 1)) {
            return false;
        }

        if (order.price && (typeof order.price !== 'number' || order.price < 0)) {
            return false;
        }

        // Проверка допустимых значений
        const validTypes = ['server', 'desktop', 'laptop', 'tablet'];
        if (order.type && !validTypes.includes(order.type)) {
            return false;
        }

        const validStatuses = Object.keys(ORDER_STATUSES);
        if (order.status && !validStatuses.includes(order.status)) {
            return false;
        }

        const validPayments = Object.keys(PAYMENT_METHODS);
        if (order.paymentMethod && !validPayments.includes(order.paymentMethod)) {
            return false;
        }

        return true;
    }

    // Публичные методы согласно заданию
    getOrders(skip = 0, top = 10, filterConfig = {}) {
        let orders = Array.from(this._orders.values());
        
        // Применение фильтров
        if (filterConfig.type) {
            orders = orders.filter(order => order.type === filterConfig.type);
        }
        
        if (filterConfig.status) {
            orders = orders.filter(order => order.status === filterConfig.status);
        }
        
        if (filterConfig.paymentMethod) {
            orders = orders.filter(order => order.paymentMethod === filterConfig.paymentMethod);
        }
        
        if (filterConfig.clientId) {
            orders = orders.filter(order => order.clientId === filterConfig.clientId);
        }
        
        if (filterConfig.minPrice !== undefined) {
            orders = orders.filter(order => order.price >= filterConfig.minPrice);
        }
        
        if (filterConfig.maxPrice !== undefined) {
            orders = orders.filter(order => order.price <= filterConfig.maxPrice);
        }
        
        // Сортировка по дате создания (новые сначала)
        orders.sort((a, b) => b.createdAt - a.createdAt);
        
        // Пагинация
        return orders.slice(skip, skip + top);
    }

    getClientOrders(clientId) {
        return Array.from(this._orders.values())
            .filter(order => order.clientId === clientId)
            .sort((a, b) => b.createdAt - a.createdAt);
    }

    getOrder(id) {
        return this._orders.get(id);
    }

    validateOrder(order) {
        return this._validateOrder(order, false);
    }

    addOrder(orderData) {
        if (!this._validateOrder(orderData, false)) {
            return false;
        }

        const newOrder = {
            id: this._generateId(),
            ...orderData,
            status: 'pending',
            createdAt: new Date(),
            managerId: null,
            managerName: null
        };

        this._orders.set(newOrder.id, newOrder);
        this._saveToStorage();
        return true;
    }

    editOrder(id, updates) {
        const order = this._orders.get(id);
        if (!order) {
            return false;
        }

        // Нельзя редактировать id, автора и дату создания
        const { id: _, createdAt: __, clientId: ___, clientName: ____, ...allowedUpdates } = updates;
        
        // Проверяем, можно ли редактировать (только для определенных статусов)
        const nonEditableStatuses = ['shipped', 'delivered', 'completed', 'cancelled'];
        if (nonEditableStatuses.includes(order.status)) {
            return false;
        }

        const updatedOrder = { ...order, ...allowedUpdates };
        
        if (!this._validateOrder(updatedOrder, true)) {
            return false;
        }

        this._orders.set(id, updatedOrder);
        this._saveToStorage();
        return true;
    }

    removeOrder(id) {
        const order = this._orders.get(id);
        if (!order) {
            return false;
        }

        // Проверяем, можно ли удалить (только для определенных статусов)
        const deletableStatuses = ['pending', 'cancelled'];
        if (!deletableStatuses.includes(order.status)) {
            return false;
        }

        const result = this._orders.delete(id);
        if (result) {
            this._saveToStorage();
        }
        return result;
    }

    // Дополнительные методы согласно заданию
    addAll(orders) {
        const failedOrders = [];
        
        orders.forEach(order => {
            if (this._validateOrder(order, false)) {
                const newOrder = {
                    ...order,
                    id: this._generateId(),
                    createdAt: order.createdAt || new Date()
                };
                this._orders.set(newOrder.id, newOrder);
            } else {
                failedOrders.push(order);
            }
        });
        
        if (orders.length > 0) {
            this._saveToStorage();
        }
        
        return failedOrders;
    }

    clear() {
        this._orders.clear();
        this._nextId = 1;
        localStorage.removeItem('computerStoreOrders');
    }

    getAllOrders() {
        return Array.from(this._orders.values());
    }

    getOrdersCount() {
        return this._orders.size;
    }
}

// ==================== ВЬЮ (View) ====================

class OrderView {
    constructor() {
        this.ordersContainer = document.getElementById('orders-container');
        this.initTemplates();
    }

    initTemplates() {
        this.templates = {
            // Шаблон для каталога (виден клиентам)
            catalogItem: (item) => {
                return `
                    <div class="catalog-item" data-id="${item.id}">
                        <div class="catalog-header">
                            <span class="catalog-type type-${item.type}">
                                ${ORDER_TYPES[item.type]}
                            </span>
                            ${item.inStock ? 
                                '<span class="in-stock"><i class="fas fa-check"></i> В наличии</span>' : 
                                '<span class="out-of-stock"><i class="fas fa-times"></i> Нет в наличии</span>'
                            }
                        </div>
                        
                        <h3 class="catalog-model">${item.model}</h3>
                        <p class="catalog-description">${item.description}</p>
                        
                        <div class="catalog-specs">
                            <div class="spec-item">
                                <i class="fas fa-microchip"></i>
                                <span>${item.cpu}</span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-memory"></i>
                                <span>${item.ram} ГБ ОЗУ</span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-hdd"></i>
                                <span>${item.storage} ГБ ПЗУ</span>
                            </div>
                        </div>
                        
                        <div class="additional-specs">
                            ${item.specs.map(spec => `
                                <div class="spec-badge">
                                    <i class="fas fa-check-circle"></i> ${spec}
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="catalog-price">
                            ${item.price.toLocaleString('ru-RU')} ₽
                            <small class="warranty">Гарантия: ${item.warranty}</small>
                        </div>
                        
                        <button class="btn btn-primary btn-block select-computer" data-id="${item.id}">
                            <i class="fas fa-shopping-cart"></i> Выбрать
                        </button>
                    </div>
                `;
            },

            // Шаблон для заказа (виден клиентам - их заказы)
            orderCard: (order) => {
                const canEdit = ['pending', 'processing'].includes(order.status);
                const canDelete = ['pending', 'cancelled'].includes(order.status);
                
                return `
                    <div class="order-card" data-id="${order.id}">
                        <div class="order-header">
                            <span class="order-id">${order.id}</span>
                            <span class="order-type type-${order.type}">
                                ${ORDER_TYPES[order.type]}
                            </span>
                        </div>
                        
                        <h3 class="order-model">${order.model}</h3>
                        <p class="order-description">${order.description}</p>
                        
                        <div class="order-specs">
                            <div class="spec-item">
                                <i class="fas fa-microchip"></i>
                                <span>${order.cpu}</span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-memory"></i>
                                <span>${order.ram} ГБ ОЗУ</span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-hdd"></i>
                                <span>${order.storage} ГБ ПЗУ</span>
                            </div>
                        </div>
                        
                        <div class="order-price">
                            ${order.price.toLocaleString('ru-RU')} ₽
                        </div>
                        
                        <div class="order-status status-${order.status}">
                            ${ORDER_STATUSES[order.status].name}
                        </div>
                        
                        <div class="order-info">
                            <div class="info-row">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${order.deliveryAddress}</span>
                            </div>
                            <div class="info-row">
                                <i class="fas fa-credit-card"></i>
                                <span>${PAYMENT_METHODS[order.paymentMethod]}</span>
                            </div>
                            ${order.managerName ? `
                                <div class="info-row">
                                    <i class="fas fa-user-tie"></i>
                                    <span>Менеджер: ${order.managerName}</span>
                                </div>
                            ` : ''}
                        </div>
                        
                        <div class="order-footer">
                            <div class="order-date">
                                ${order.createdAt.toLocaleDateString('ru-RU')}
                            </div>
                            <div class="order-actions">
                                ${canEdit ? `
                                    <button class="btn btn-secondary btn-sm edit-order" data-id="${order.id}">
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                ` : ''}
                                
                                ${canDelete ? `
                                    <button class="btn btn-danger btn-sm delete-order" data-id="${order.id}">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;
            },

            // Шаблон для заказа менеджера (видит все заказы)
            managerOrderCard: (order) => {
                return `
                    <div class="order-card" data-id="${order.id}">
                        <div class="order-header">
                            <span class="order-id">${order.id}</span>
                            <span class="order-type type-${order.type}">
                                ${ORDER_TYPES[order.type]}
                            </span>
                        </div>
                        
                        <h3 class="order-model">${order.model}</h3>
                        <p class="order-description">${order.description}</p>
                        
                        <div class="client-info">
                            <div class="info-row">
                                <i class="fas fa-user"></i>
                                <span><strong>Клиент:</strong> ${order.clientName}</span>
                            </div>
                        </div>
                        
                        <div class="order-specs">
                            <div class="spec-item">
                                <i class="fas fa-microchip"></i>
                                <span>${order.cpu}</span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-memory"></i>
                                <span>${order.ram} ГБ ОЗУ</span>
                            </div>
                        </div>
                        
                        <div class="order-price">
                            ${order.price.toLocaleString('ru-RU')} ₽
                        </div>
                        
                        <div class="order-status status-${order.status}">
                            ${ORDER_STATUSES[order.status].name}
                        </div>
                        
                        <div class="order-info">
                            <div class="info-row">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${order.deliveryAddress}</span>
                            </div>
                            <div class="info-row">
                                <i class="fas fa-credit-card"></i>
                                <span>${PAYMENT_METHODS[order.paymentMethod]}</span>
                            </div>
                            ${order.software ? `
                                <div class="info-row">
                                    <i class="fas fa-wrench"></i>
                                    <span>ПО: ${order.software}</span>
                                </div>
                            ` : ''}
                        </div>
                        
                        <div class="order-footer">
                            <div class="order-date">
                                ${order.createdAt.toLocaleDateString('ru-RU')}
                            </div>
                            <div class="order-actions">
                                <button class="btn btn-secondary btn-sm change-status" data-id="${order.id}">
                                    <i class="fas fa-edit"></i> Статус
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            },

            // Шаблон для раздела "Мои заказы"
            myOrdersSection: (orders, stats) => {
                if (orders.length === 0) {
                    return `
                        <div class="empty-orders">
                            <i class="fas fa-shopping-cart"></i>
                            <h3>У вас пока нет заказов</h3>
                            <p>Выберите компьютер из каталога и оформите свой первый заказ!</p>
                            <button class="btn btn-primary" id="go-to-catalog">
                                <i class="fas fa-laptop"></i> Перейти в каталог
                            </button>
                        </div>
                    `;
                }

                return `
                    <div class="my-orders-section">
                        <div class="orders-stats">
                            <div class="stat-card">
                                <h4>Всего заказов</h4>
                                <div class="stat-value stat-total">${stats.total}</div>
                            </div>
                            <div class="stat-card">
                                <h4>Ожидают оплаты</h4>
                                <div class="stat-value stat-pending">${stats.pending}</div>
                            </div>
                            <div class="stat-card">
                                <h4>В обработке</h4>
                                <div class="stat-value stat-processing">${stats.processing}</div>
                            </div>
                            <div class="stat-card">
                                <h4>Выполнено</h4>
                                <div class="stat-value stat-completed">${stats.completed}</div>
                            </div>
                        </div>
                        
                        <div class="orders-table-container">
                            <table class="orders-table">
                                <thead>
                                    <tr>
                                        <th>Номер заказа</th>
                                        <th>Товар</th>
                                        <th>Дата заказа</th>
                                        <th>Сумма</th>
                                        <th>Статус</th>
                                        <th>Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${orders.map(order => `
                                        <tr data-id="${order.id}">
                                            <td><strong>${order.id}</strong></td>
                                            <td>
                                                <div><strong>${order.model}</strong></div>
                                                <small style="color: #666;">${ORDER_TYPES[order.type]}</small>
                                            </td>
                                            <td>${order.createdAt.toLocaleDateString('ru-RU')}</td>
                                            <td><strong>${order.price.toLocaleString('ru-RU')} ₽</strong></td>
                                            <td>
                                                <span class="order-status-cell status-${order.status}">
                                                    ${ORDER_STATUSES[order.status].name}
                                                </span>
                                            </td>
                                            <td class="order-actions-cell">
                                                ${['pending', 'processing'].includes(order.status) ? `
                                                    <button class="btn btn-secondary btn-sm edit-order-table" data-id="${order.id}" title="Редактировать">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                ` : ''}
                                                
                                                ${['pending', 'cancelled'].includes(order.status) ? `
                                                    <button class="btn btn-danger btn-sm delete-order-table" data-id="${order.id}" title="Удалить">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                ` : ''}
                                                
                                                <button class="btn btn-outline btn-sm view-order-details" data-id="${order.id}" title="Подробнее">
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
            }
        };
    }

    // Методы для отображения каталога
    renderCatalog(catalogItems) {
        if (catalogItems.length === 0) {
            this.ordersContainer.innerHTML = `
                <div class="no-items">
                    <i class="fas fa-box-open"></i>
                    <p>Товары не найдены</p>
                </div>
            `;
        } else {
            this.ordersContainer.innerHTML = catalogItems
                .map(item => this.templates.catalogItem(item))
                .join('');
        }
    }

    // Методы для отображения заказов клиента в виде карточек
    renderClientOrders(orders) {
        if (orders.length === 0) {
            this.ordersContainer.innerHTML = `
                <div class="no-orders">
                    <i class="fas fa-shopping-cart"></i>
                    <p>У вас пока нет заказов</p>
                    <p class="subtext">Выберите компьютер из каталога и оформите заказ</p>
                </div>
            `;
        } else {
            this.ordersContainer.innerHTML = orders
                .map(order => this.templates.orderCard(order))
                .join('');
        }
    }

    // Методы для отображения всех заказов (менеджер)
    renderManagerOrders(orders) {
        if (orders.length === 0) {
            this.ordersContainer.innerHTML = `
                <div class="no-orders">
                    <i class="fas fa-clipboard-list"></i>
                    <p>Заказы не найдены</p>
                </div>
            `;
        } else {
            this.ordersContainer.innerHTML = orders
                .map(order => this.templates.managerOrderCard(order))
                .join('');
        }
    }

    // Метод для отображения раздела "Мои заказы"
    renderMyOrders(orders, stats) {
        this.ordersContainer.innerHTML = this.templates.myOrdersSection(orders, stats);
    }

    appendOrders(orders, isManager = false) {
        const html = orders
            .map(order => isManager ? this.templates.managerOrderCard(order) : this.templates.orderCard(order))
            .join('');
        this.ordersContainer.insertAdjacentHTML('beforeend', html);
    }

    showModal(order) {
        const modal = document.getElementById('edit-modal');
        document.getElementById('edit-order-id').value = order.id;
        document.getElementById('current-status').value = ORDER_STATUSES[order.status].name;
        document.getElementById('new-status').value = order.status;
        modal.classList.remove('hidden');
    }

    hideModal() {
        document.getElementById('edit-modal').classList.add('hidden');
    }

    updateOrderInView(order, isManager = false) {
        const orderElement = document.querySelector(`[data-id="${order.id}"]`);
        if (orderElement) {
            orderElement.outerHTML = isManager ? 
                this.templates.managerOrderCard(order) : 
                this.templates.orderCard(order);
        }
    }

    removeOrderFromView(id) {
        const orderElement = document.querySelector(`[data-id="${id}"]`);
        if (orderElement) {
            orderElement.remove();
        }
    }

    updateUserInterface(user, viewMode = 'catalog') {
        const loginSection = document.getElementById('login-section');
        const logoutSection = document.getElementById('logout-section');
        const currentUserSpan = document.getElementById('current-user');
        const myOrdersBtn = document.getElementById('my-orders-btn');
        const backToCatalogBtn = document.getElementById('back-to-catalog');
        const contentHeader = document.querySelector('.content-header h2');
        const newOrderForm = document.getElementById('new-order-form');
        const clientInfo = document.getElementById('client-info');
        const managerInfo = document.getElementById('manager-info');

        if (user) {
            loginSection.classList.add('hidden');
            logoutSection.classList.remove('hidden');
            
            if (user.role === 'client') {
                currentUserSpan.textContent = `Клиент: ${user.name}`;
                myOrdersBtn.classList.remove('hidden');
                clientInfo.classList.remove('hidden');
                managerInfo.classList.add('hidden');
                
                if (viewMode === 'catalog') {
                    contentHeader.innerHTML = '<i class="fas fa-laptop"></i> Каталог компьютеров';
                    backToCatalogBtn.classList.add('hidden');
                    myOrdersBtn.classList.remove('hidden');
                } else {
                    contentHeader.innerHTML = '<i class="fas fa-shopping-cart"></i> Мои заказы';
                    backToCatalogBtn.classList.remove('hidden');
                    myOrdersBtn.classList.add('hidden');
                }
            } else {
                currentUserSpan.textContent = `Менеджер: ${user.name}`;
                myOrdersBtn.classList.add('hidden');
                backToCatalogBtn.classList.add('hidden');
                clientInfo.classList.add('hidden');
                managerInfo.classList.remove('hidden');
                contentHeader.innerHTML = '<i class="fas fa-clipboard-list"></i> Все заказы';
            }
        } else {
            loginSection.classList.remove('hidden');
            logoutSection.classList.add('hidden');
            myOrdersBtn.classList.add('hidden');
            backToCatalogBtn.classList.add('hidden');
            clientInfo.classList.add('hidden');
            managerInfo.classList.add('hidden');
            contentHeader.innerHTML = '<i class="fas fa-laptop"></i> Каталог компьютеров';
        }
        
        newOrderForm.classList.add('hidden');
    }

    showEditForm(order) {
        const newDescription = prompt('Введите новое описание:', order.description);
        return newDescription;
    }
}

// ==================== КОНТРОЛЛЕР (Controller) ====================

class OrderController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.currentUser = null;
        this.currentSkip = 0;
        this.pageSize = 10;
        this.currentFilters = {};
        this.selectedComputer = null;
        this.viewMode = 'catalog'; // 'catalog' или 'orders'
        
        this.init();
    }

    init() {
        // Восстанавливаем пользователя из localStorage
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
        }
        
        this.loadContent();
        this.bindEvents();
        this.view.updateUserInterface(this.currentUser, this.viewMode);
    }

    bindEvents() {
        // Авторизация
        document.getElementById('login-btn').addEventListener('click', () => this.login());
        document.getElementById('logout-btn').addEventListener('click', () => this.logout());
        
        // Фильтры
        document.getElementById('apply-filters').addEventListener('click', () => this.applyFilters());
        document.getElementById('clear-filters').addEventListener('click', () => this.clearFilters());
        
        // Пагинация
        document.getElementById('load-more').addEventListener('click', () => this.loadMore());
        
        // Форма заказа
        document.getElementById('add-order-form').addEventListener('submit', (e) => this.addOrder(e));
        document.getElementById('cancel-order').addEventListener('click', () => {
            document.getElementById('new-order-form').classList.add('hidden');
            this.selectedComputer = null;
        });
        
        // Редактирование статуса
        document.querySelector('.close-modal').addEventListener('click', () => this.view.hideModal());
        document.querySelector('.cancel-modal').addEventListener('click', () => this.view.hideModal());
        document.getElementById('edit-status-form').addEventListener('submit', (e) => this.updateStatus(e));
        
        // Переключение между каталогом и заказами
        document.getElementById('my-orders-btn').addEventListener('click', () => this.showMyOrders());
        document.getElementById('back-to-catalog').addEventListener('click', () => this.showCatalog());
        
        // Делегирование событий для динамических элементов
        document.addEventListener('click', (e) => {
            // Выбор компьютера из каталога
            if (e.target.closest('.select-computer')) {
                const computerId = e.target.closest('.select-computer').dataset.id;
                this.selectComputer(computerId);
            }
            
            // Для менеджеров - изменение статуса
            if (e.target.closest('.change-status')) {
                const orderId = e.target.closest('.change-status').dataset.id;
                this.showStatusModal(orderId);
            }
            
            // Для клиентов - удаление заказа из карточки
            if (e.target.closest('.delete-order')) {
                const orderId = e.target.closest('.delete-order').dataset.id;
                this.deleteOrder(orderId);
            }
            
            // Для клиентов - редактирование заказа из карточки
            if (e.target.closest('.edit-order')) {
                const orderId = e.target.closest('.edit-order').dataset.id;
                this.editOrder(orderId);
            }
            
            // Для клиентов - удаление заказа из таблицы
            if (e.target.closest('.delete-order-table')) {
                const orderId = e.target.closest('.delete-order-table').dataset.id;
                this.deleteOrder(orderId);
            }
            
            // Для клиентов - редактирование заказа из таблицы
            if (e.target.closest('.edit-order-table')) {
                const orderId = e.target.closest('.edit-order-table').dataset.id;
                this.editOrder(orderId);
            }
            
            // Для клиентов - просмотр деталей заказа
            if (e.target.closest('.view-order-details')) {
                const orderId = e.target.closest('.view-order-details').dataset.id;
                this.showOrderDetails(orderId);
            }
            
            // Кнопка "Перейти в каталог" в пустом состоянии
            if (e.target.closest('#go-to-catalog')) {
                this.showCatalog();
            }
        });
    }

    login() {
        const userSelect = document.getElementById('user-select');
        const userId = userSelect.value;
        
        if (!userId) {
            alert('Пожалуйста, выберите пользователя');
            return;
        }
        
        this.currentUser = USERS[userId];
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        
        this.viewMode = 'catalog';
        this.view.updateUserInterface(this.currentUser, this.viewMode);
        this.loadContent();
        
        userSelect.value = '';
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.viewMode = 'catalog';
        this.view.updateUserInterface(null, this.viewMode);
        this.loadContent();
    }

    loadContent() {
        if (this.currentUser) {
            if (this.currentUser.role === 'client') {
                if (this.viewMode === 'catalog') {
                    this.loadClientCatalog();
                } else {
                    this.showMyOrders();
                }
            } else {
                this.loadManagerContent();
            }
        } else {
            // Гость видит каталог
            this.loadClientCatalog();
        }
    }

    loadClientCatalog() {
        // Клиент видит каталог компьютеров
        let filteredCatalog = [...COMPUTER_CATALOG];
        
        // Применяем фильтры к каталогу
        if (this.currentFilters.type) {
            filteredCatalog = filteredCatalog.filter(item => item.type === this.currentFilters.type);
        }
        
        if (this.currentFilters.minPrice !== undefined) {
            filteredCatalog = filteredCatalog.filter(item => item.price >= this.currentFilters.minPrice);
        }
        
        if (this.currentFilters.maxPrice !== undefined) {
            filteredCatalog = filteredCatalog.filter(item => item.price <= this.currentFilters.maxPrice);
        }
        
        // Показываем каталог
        this.view.renderCatalog(filteredCatalog);
    }

    loadManagerContent() {
        // Менеджер видит все заказы
        const orders = this.model.getOrders(this.currentSkip, this.pageSize, this.currentFilters);
        this.view.renderManagerOrders(orders);
        
        // Скрываем кнопку "Показать еще", если заказов меньше размера страницы
        const loadMoreBtn = document.getElementById('load-more');
        if (orders.length < this.pageSize) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    loadMore() {
        if (this.currentUser?.role === 'manager') {
            this.currentSkip += this.pageSize;
            const orders = this.model.getOrders(this.currentSkip, this.pageSize, this.currentFilters);
            this.view.appendOrders(orders, true);
        }
    }

    applyFilters() {
        this.currentFilters = {
            type: document.getElementById('filter-type').value || undefined,
            status: document.getElementById('filter-status').value || undefined,
            paymentMethod: document.getElementById('filter-payment').value || undefined,
            minPrice: document.getElementById('filter-min-price').value ? 
                     parseInt(document.getElementById('filter-min-price').value) : undefined,
            maxPrice: document.getElementById('filter-max-price').value ? 
                     parseInt(document.getElementById('filter-max-price').value) : undefined
        };
        
        this.loadContent();
    }

    clearFilters() {
        document.getElementById('filter-type').value = '';
        document.getElementById('filter-status').value = '';
        document.getElementById('filter-payment').value = '';
        document.getElementById('filter-min-price').value = '';
        document.getElementById('filter-max-price').value = '';
        
        this.currentFilters = {};
        this.loadContent();
    }

    selectComputer(computerId) {
        if (!this.currentUser || this.currentUser.role !== 'client') {
            alert('Только клиенты могут оформлять заказы');
            return;
        }
        
        const computer = COMPUTER_CATALOG.find(item => item.id === computerId);
        if (!computer) {
            alert('Компьютер не найден');
            return;
        }
        
        this.selectedComputer = computer;
        
        // Показываем форму оформления заказа
        const form = document.getElementById('new-order-form');
        const selectedComputerInput = document.getElementById('selected-computer');
        
        selectedComputerInput.value = `${computer.model} - ${ORDER_TYPES[computer.type]}`;
        form.classList.remove('hidden');
        form.scrollIntoView({ behavior: 'smooth' });
    }

    addOrder(e) {
        e.preventDefault();
        
        if (!this.currentUser || this.currentUser.role !== 'client') {
            alert('Только клиенты могут создавать заказы');
            return;
        }
        
        if (!this.selectedComputer) {
            alert('Сначала выберите компьютер из каталога');
            return;
        }
        
        const formData = new FormData(e.target);
        const orderData = {
            type: this.selectedComputer.type,
            model: this.selectedComputer.model,
            description: this.selectedComputer.description,
            cpu: this.selectedComputer.cpu,
            ram: this.selectedComputer.ram,
            storage: this.selectedComputer.storage,
            price: this.selectedComputer.price,
            software: formData.get('software'),
            deliveryAddress: formData.get('deliveryAddress'),
            paymentMethod: formData.get('paymentMethod'),
            clientId: this.currentUser.id,
            clientName: this.currentUser.name
        };
        
        if (this.model.addOrder(orderData)) {
            alert('Заказ успешно оформлен!');
            e.target.reset();
            this.selectedComputer = null;
            
            // Скрываем форму и переключаемся в режим просмотра заказов
            document.getElementById('new-order-form').classList.add('hidden');
            this.showMyOrders();
        } else {
            alert('Ошибка при оформлении заказа. Проверьте введенные данные.');
        }
    }

    showMyOrders() {
        if (!this.currentUser || this.currentUser.role !== 'client') {
            return;
        }
        
        this.viewMode = 'orders';
        const orders = this.model.getClientOrders(this.currentUser.id);
        
        // Рассчитываем статистику
        const stats = {
            total: orders.length,
            pending: orders.filter(o => o.status === 'pending').length,
            processing: orders.filter(o => o.status === 'processing').length,
            completed: orders.filter(o => ['delivered', 'completed'].includes(o.status)).length
        };
        
        this.view.renderMyOrders(orders, stats);
        this.view.updateUserInterface(this.currentUser, this.viewMode);
    }

    showCatalog() {
        this.viewMode = 'catalog';
        this.loadClientCatalog();
        this.view.updateUserInterface(this.currentUser, this.viewMode);
    }

    showStatusModal(orderId) {
        const order = this.model.getOrder(orderId);
        if (!order) {
            alert('Заказ не найден');
            return;
        }
        
        if (this.currentUser?.role !== 'manager') {
            alert('Только менеджеры могут изменять статусы заказов');
            return;
        }
        
        this.view.showModal(order);
    }

    updateStatus(e) {
        e.preventDefault();
        
        const orderId = document.getElementById('edit-order-id').value;
        const newStatus = document.getElementById('new-status').value;
        const comment = document.getElementById('status-comment').value;
        
        // Обновляем менеджера, если статус меняется впервые
        const order = this.model.getOrder(orderId);
        const updates = { 
            status: newStatus,
            managerId: order.managerId || this.currentUser.id,
            managerName: order.managerName || this.currentUser.name
        };
        
        if (comment) {
            updates.software = order.software ? `${order.software}\nКомментарий менеджера: ${comment}` : `Комментарий менеджера: ${comment}`;
        }
        
        if (this.model.editOrder(orderId, updates)) {
            const updatedOrder = this.model.getOrder(orderId);
            
            if (this.currentUser.role === 'manager') {
                this.view.updateOrderInView(updatedOrder, true);
            }
            
            this.view.hideModal();
            alert('Статус успешно обновлен!');
            
            // Если клиент смотрит свои заказы, обновляем отображение
            if (this.currentUser.role === 'client' && this.viewMode === 'orders') {
                this.showMyOrders();
            }
        } else {
            alert('Ошибка при обновлении статуса');
        }
    }

    deleteOrder(orderId) {
        if (!confirm('Вы уверены, что хотите удалить этот заказ?')) {
            return;
        }
        
        if (this.model.removeOrder(orderId)) {
            alert('Заказ успешно удален!');
            
            // Обновляем отображение в зависимости от режима просмотра
            if (this.viewMode === 'orders') {
                this.showMyOrders();
            } else if (this.currentUser?.role === 'client') {
                const orders = this.model.getClientOrders(this.currentUser.id);
                this.view.renderClientOrders(orders);
            } else {
                this.view.removeOrderFromView(orderId);
            }
        } else {
            alert('Невозможно удалить заказ в текущем статусе');
        }
    }

    editOrder(orderId) {
        const order = this.model.getOrder(orderId);
        if (!order) return;
        
        const newDescription = this.view.showEditForm(order);
        if (newDescription && newDescription !== order.description) {
            if (this.model.editOrder(orderId, { description: newDescription })) {
                const updatedOrder = this.model.getOrder(orderId);
                
                // Обновляем отображение в зависимости от режима просмотра
                if (this.viewMode === 'orders') {
                    this.showMyOrders();
                } else if (this.currentUser?.role === 'client') {
                    this.view.updateOrderInView(updatedOrder);
                }
                
                alert('Описание успешно обновлено!');
            } else {
                alert('Ошибка при обновлении описания');
            }
        }
    }

    showOrderDetails(orderId) {
        const order = this.model.getOrder(orderId);
        if (!order) return;
        
        alert(`
            Детали заказа ${order.id}:
            
            Товар: ${order.model}
            Тип: ${ORDER_TYPES[order.type]}
            Описание: ${order.description}
            
            Характеристики:
            - Процессор: ${order.cpu}
            - ОЗУ: ${order.ram} ГБ
            - ПЗУ: ${order.storage} ГБ
            
            Информация о заказе:
            - Статус: ${ORDER_STATUSES[order.status].name}
            - Способ оплаты: ${PAYMENT_METHODS[order.paymentMethod]}
            - Адрес доставки: ${order.deliveryAddress}
            - Дата заказа: ${order.createdAt.toLocaleDateString('ru-RU')}
            
            ${order.software ? `- Дополнительное ПО: ${order.software}` : ''}
            ${order.managerName ? `- Ответственный менеджер: ${order.managerName}` : ''}
        `);
    }
}

// ==================== ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ ====================

// Инициализируем приложение при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const model = new OrderModel(INITIAL_ORDERS);
    const view = new OrderView();
    new OrderController(model, view);
});