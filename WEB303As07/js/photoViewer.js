(function ($) {
    $.fn.photoViewer = function () {
        return this.each(function () {
            var $this = $(this);
            var $modal = $('<div class="modal">').appendTo('body');
            var $modalContent = $('<div class="modal-content">').appendTo($modal);
            var $closeButton = $('<span class="close">&times;</span>').appendTo($modalContent);
            var $modalImage = $('<img>').appendTo($modalContent);

            $this.on('click', '.photo-box', function (event) {
                event.preventDefault();
                var imageUrl = $(this).attr('href');
                $this.find('.photo-box').removeClass('active');
                $(this).addClass('active');
                $modalImage.attr('src', imageUrl);
                $modal.show();
            });

            $closeButton.on('click', function () {
                $modal.hide();
            });

            // Method to set href of clicked thumbnail
            $this.setThumbnailHref = function (href) {
                $this.find('.photo-box.active').attr('href', href);
                return $this; // Enable chaining
            };
        });
    };
})(jQuery);