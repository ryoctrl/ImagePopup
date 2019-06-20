$(function() {
    let url = '';
    $('html').mousemove(e => {
        const classes = e.target.className;

        if (!classes) {
            url = '';
            return;
        }

        if (classes.indexOf('js-media-image-link') !== -1) {
            const style = e.target.style;
            if (!style.backgroundImage) return;
            const fullPath = style.backgroundImage.split('"');
            const urlWithQuery = fullPath[1];
            url = (urlWithQuery.split('?'))[0] + ':orig';
        } else if (classes.indexOf('media-img') !== -1 || classes.indexOf('media-image') !== -1) {
            const src = e.target.src;
            url = src.replace('large', 'orig');
        } else return;
    });

    $('html').keydown(e => {
        console.log('opening to ', url);
        if (url === '' || e.keyCode !== 17) return;
        window.open(url);
        url = '';
    });
});