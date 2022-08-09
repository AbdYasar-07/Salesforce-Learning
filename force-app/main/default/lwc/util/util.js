export function copyToClipboard(content) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(content);
    } else {
        let textArea = document.createElement("textarea");
        textArea.value = content;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((resolve, reject) => {
            document.execCommand("copy") ? resolve() : reject();
            textArea.remove();
        })
    }
}