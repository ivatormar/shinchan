"use strict";

import Helper from "./ClickerHelper.js";
import stylesString from "./styles/clicker-generator.scss?inline";

export default class ClickerGenerator extends HTMLElement {
  // Attributes
  static G_ID = "data-id";
  static G_IMG = "data-img";
  static G_TITLE = "data-title";
  static G_PRICE = "data-price";
  static G_LEVEL = "data-level";
  static G_MPS = "data-mps";
  static G_COOLDOWN = "data-cooldown";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.gId = this.getAttribute(ClickerGenerator.G_ID);
    this.gImg = this.getAttribute(ClickerGenerator.G_IMG);
    this.gTitle = this.getAttribute(ClickerGenerator.G_TITLE);
    this.gPrice = parseInt(this.getAttribute(ClickerGenerator.G_PRICE));
    this.gLevel = parseInt(this.getAttribute(ClickerGenerator.G_LEVEL));
    this.gMps = parseInt(this.getAttribute(ClickerGenerator.G_MPS));
    this.gCooldown = parseInt(this.getAttribute(ClickerGenerator.G_COOLDOWN));
    this.bankSavings = 0;
  }

  connectedCallback() {
    this.render();
    this.classList.add("hidden");
    if (this.gLevel > 0) this.resetProgressBar();
    document.addEventListener(Helper.MsgBankUpdate, this);
  }

  // Event management

  handleEvent(event) {
    if (event.type === Helper.MsgBankUpdate) {
      this.bankSavings = event.detail.bankSavings;
      this.updateGeneratorVisibility();
      this.updateUpgradeButtonAvailable();
    }
  }

  // Custom event messages

  sendQuantityToBank() {
    const eventMessage = new CustomEvent(Helper.MsgBankAdd, {
      detail: {
        quantity: this.gMps * this.gLevel,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(eventMessage);
    this.resetProgressBar();
  }

  spendFromTheBank(cost) {
    const eventMessage = new CustomEvent(Helper.MsgBankSubtract, {
      detail: {
        quantity: cost,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(eventMessage);
  }

  // Render

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        ${stylesString}
      </style>
      <div>
        <h3>${this.gTitle}</h3>
        <div  class="clicker-generator-img">
        <img src="${this.gImg}" alt="${this.gTitle}">
        </div>
        <p class="clicker-generator-level">Level ${this.gLevel}</p>
        <div class="clicker-generator-progress-bar">
          <div class="clicker-generator-progress"></div>
        </div>
        <p class="clicker-generator-mps">Income ${Helper.formatAmount(
          this.gMps * this.gLevel
        )} 💰/s</p>
        <div class="buttonn">
        
        <button class='clicker-generator-add-btn' disabled>
         Improve 💲${Helper.formatAmount(this.getCurrentCost())}
  <div class="star-1">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-2">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-3">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-4">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-5">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-6">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
</button>
</div>
      
      </div>
    `;

    this.shadowRoot
      .querySelector(".clicker-generator-add-btn")
      .addEventListener("click", () => this.upgrade());
  }

  // View logic

  updateGeneratorVisibility() {
    if (this.bankSavings >= this.gPrice) this.classList.remove("hidden");
  }

  updateUpgradeButtonAvailable() {
    const upgradeBtn = this.shadowRoot.querySelector(
      ".clicker-generator-add-btn"
    );
    if (this.bankSavings >= this.getCurrentCost())
      upgradeBtn.removeAttribute("disabled");
    else upgradeBtn.setAttribute("disabled", "");
  }

  upgrade() {
    this.spendFromTheBank(this.getCurrentCost());
    this.gLevel++;
    this.shadowRoot.querySelector(
      ".clicker-generator-level"
    ).textContent = `Level ${this.gLevel}`;
    this.shadowRoot.querySelector(
      ".clicker-generator-mps"
    ).textContent = `Income ${Helper.formatAmount(
      this.gMps * this.gLevel
    )} 💰/s`;
    this.shadowRoot.querySelector(
      ".clicker-generator-add-btn"
    ).textContent = `Improve 💲 ${Helper.formatAmount(this.getCurrentCost())}`;
    this.resetProgressBar();
  }

  getCurrentCost() {
    return this.gPrice * 1.3 ** this.gLevel;
  }

  resetProgressBar() {
    clearInterval(this.cooldownTimer);
    this.cooldownTimer = null;
    this.currentCooldownTime = 0;
    this.cooldownTimer = setInterval(() => {
      this.updateProgressBar();
      this.currentCooldownTime += 30;
    }, 30);
  }

  updateProgressBar() {
    const progress = this.shadowRoot.querySelector(
      ".clicker-generator-progress"
    );
    let progressValue = this.currentCooldownTime / this.gCooldown;
    if (progressValue >= 1) progressValue = 1.0;
    progress.style.width = `${progressValue * 100}%`;
    if (progressValue >= 1) {
      this.sendQuantityToBank();
    }
  }
}

customElements.define("clicker-generator", ClickerGenerator);


{/* <button class='clicker-generator-add-btn' disabled></button> */}