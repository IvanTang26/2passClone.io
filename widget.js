class ChatWidget {
    constructor() {
        this.isOpen = false;
        this.createWidget();
        this.initializeEventListeners();
    }

    createWidget() {
        // Create widget button
        this.widgetButton = document.createElement('div');
        this.widgetButton.className = 'chat-widget-button';
        this.widgetButton.innerHTML = `
            <div class="chat-icon">
                <i class="fas fa-comments"></i>
            </div>
        `;

        // Create widget popup
        this.widgetPopup = document.createElement('div');
        this.widgetPopup.className = 'chat-widget-popup';
        this.widgetPopup.innerHTML = `
            <div class="chat-header">
                <h3>How can we help?</h3>
                <p>We usually respond in a few hours</p>
                <button class="close-button">×</button>
            </div>
            <div class="chat-body">
                <form id="chatForm">
                    <div class="form-group">
                        <input type="text" placeholder="姓名" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="電郵" required>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="留言" required></textarea>
                    </div>
                    <button type="submit" class="submit-button">發送訊息</button>
                </form>
            </div>
        `;

        // Append elements to body
        document.body.appendChild(this.widgetButton);
        document.body.appendChild(this.widgetPopup);
    }

    initializeEventListeners() {
        // Toggle widget on button click
        this.widgetButton.addEventListener('click', () => this.toggleWidget());

        // Close widget on close button click
        const closeButton = this.widgetPopup.querySelector('.close-button');
        closeButton.addEventListener('click', () => this.closeWidget());

        // Handle form submission
        const form = this.widgetPopup.querySelector('#chatForm');
        form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    toggleWidget() {
        this.isOpen = !this.isOpen;
        this.widgetPopup.classList.toggle('open', this.isOpen);
        this.widgetButton.classList.toggle('active', this.isOpen);
    }

    closeWidget() {
        this.isOpen = false;
        this.widgetPopup.classList.remove('open');
        this.widgetButton.classList.remove('active');
    }

    handleSubmit(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
        // Optional: Close widget after submission
        this.closeWidget();
    }
}
