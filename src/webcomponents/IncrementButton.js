class IncrementButton extends HTMLElement {

    constructor() {
        super();

        // Scoped CSS by using shadow DOM.
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
          div {
            font-weight: bold;
          }
          button {
            border: 1px solid blue;
            background-color: lightblue;
            color: black;
            padding: .5em 1em;
            margin-left: .5em;
          }
        </style>
        
        <div>
            increment: <span class="value"></span>
            <button type="button" increment>+</button>
        </div>
      `;

        this.incrementBtn = this.shadowRoot.querySelector('[increment]');
        this.displayValue = this.shadowRoot.querySelector('.value');

        // Bind the increment function to the html element object context (instead of the calling context).
        this.increment = this.increment.bind(this);
    }

    /**
     * Initially called on element creation.
     * Register listener for button.
     */
    connectedCallback() {
        this.incrementBtn.addEventListener('click', this.increment);
    }

    /**
     * Called on element destroy.
     */
    disconnectedCallback() {
        this.incrementBtn.removeEventListener('click', this.increment);
    }

    /**
     * Listen for the following element attributes.
     *
     * @return {string[]}
     */
    static get observedAttributes() {
        return ['value'];
    }

    /**
     * The "value" attribute is changed or component initialization.
     */
    attributeChangedCallback() {
        this.displayValue.innerText = this.value;
    }

    /**
     * Increment the value by one.
     */
    increment() {
        this.value = +this.value + 1;
    }

    /**
     * The "value" attribute is used as the source for the "value" property.
     * @return {number} The value
     */
    get value() {
        return +this.getAttribute('value') || 0;
    }

    /**
     * Set the value.
     * @param {number|string} newValue The numeric value
     */
    set value(newValue) {
        this.setAttribute('value', newValue);
        this.dispatchEvent(new CustomEvent("update:value", {detail: +newValue}));
    }
}

window.customElements.define('increment-button', IncrementButton);
