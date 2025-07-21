class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container-fluid">
                    <!-- LOGO WITH HOME LINK -->
                    <a href="./index.html"><img src="./img/logo/J-Logo-BlueGreen.png" alt="Joshie"></a>
                    <!-- FOOTER TEXT WITH WIX LINK -->
                    <div class="text">
                        <p>&copy 2023 by Josh Marvey Cruz. Proudly designed with <a href="https://www.wix.com/" target="_blank">Wix</a></p>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-component', Footer);