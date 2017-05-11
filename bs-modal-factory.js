/**
 *  Bootstrap Modal Factory Plugin
 *  http://github.com/yitzhakandrade/bs-modal-factory/
 *
 *  (c) http://yitzhakandrade.github.io/
 *  MIT licensed
 */

(function ($) {
    $.modalFactory = function (options) {
        var defaults = {
            id: 'myModal',
            title: 'Title',
            body: 'Body',
            buttons: [{
                id: undefined,
                text: 'Close',
                cssClass: 'default',
                dataDismiss: true,
                onClick: undefined
            }]
        };
        var settings = $.extend(defaults, options);
        $('body').append($(htmlModal()));
        bindOnClickButtonsEvents();
        var elModal = $('#' + settings.id);
        if (true)
            elModal.on('hidden.bs.modal', function () { elModal.remove(); });
        return elModal;

        // ==================================
        // ==================================

        function htmlModal() {
            var html = '';
            html += '<div class="modal fade" id="' + settings.id + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
            html += '<div class="modal-dialog" role="document">';
            html += '<div class="modal-content">';
            html += htmlHeader();
            html += '<div class="modal-body">' + settings.body + '</div>';
            html += htmlFooter();
            html += '</div></div></div>';
            return html;
        }

        function htmlHeader() {
            var html = '';
            html += '<div class="modal-header">';
            if (true)
                html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
            html += '<h4 class="modal-title" id="' + settings.id + 'Label">' + settings.title + '</h4>';
            html += '</div>';
            return html;
        }

        function htmlFooter() {
            var html = '';
            html += '<div class="modal-footer">';
            html += htmlButtons();
            html += '</div>';
            return html;
        }

        function htmlButtons() {
            var html = '';
            for (i in settings.buttons) {
                if (!settings.buttons[i].id)
                    settings.buttons[i].id = settings.id + 'Btn' + i;

                html += '<button type="button"';
                html += ' id="' + settings.buttons[i].id + '"';
                html += ' class="btn btn-' + settings.buttons[i].cssClass + '"';

                if (settings.buttons[i].dataDismiss)
                    html += ' data-dismiss="modal"';

                html += '>' + settings.buttons[i].text + '</button>';
            }
            return html;
        }

        function bindOnClickButtonsEvents() {
            for (i in settings.buttons) {
                if (settings.buttons[i].id && settings.buttons[i].onClick) {
                    $('#' + settings.buttons[i].id).on('click', settings.buttons[i].onClick);
                }
            }
        }

    };
}(jQuery));
