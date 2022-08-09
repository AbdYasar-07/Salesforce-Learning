import { LightningElement } from 'lwc';
import { copyToClipboard } from "c/util";

const COPIED = "Copied";
export default class TestComponent extends LightningElement {


    async handleCopy() {
        let content = this.template.querySelector("[data-id='content']").innerHTML;
        copyToClipboard(content);
        setTimeout(() => {
            this.template.querySelector("[data-id='button']").label = "Copy me";
        }, 2000);
        this.template.querySelector("[data-id='button']").label = COPIED;
    }

}