export default ({locale, biImage, loadButtonStyle, downloadButtonStyle, saveButtonStyle}) => (`
    <div class="tui-image-editor-controls">
        <div class="tui-image-editor-controls-logo">
            <img src="${biImage}" />
        </div>
        <ul class="tui-image-editor-menu"></ul>

        <div class="tui-image-editor-controls-buttons">
            <div style="${loadButtonStyle}">
                ${locale.localize('Load')}
                <input type="file" class="tui-image-editor-load-btn" />
            </div>
            <button class="tui-image-editor-download-btn" style="${downloadButtonStyle}">
                ${locale.localize('Download')}
            </button>
            <button class="tui-image-editor-save-btn" style="${saveButtonStyle}">
                ${locale.localize('Save')}
            </button>
        </div>
    </div>
`);
