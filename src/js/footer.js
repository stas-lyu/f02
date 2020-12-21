$(document).ready(function () {

    function renderFooter() {
        $('body').append(`<footer id="footer">
        <div class="footer_subscribe_wrapper">
            <div class="footer_subscribe_section">
                <p class="title_footer">SUBSCRIBE TO OUR NEWSLETTER TO RECEIVE LATEST NEWS AND OFFERS </p>
                <form id="subscribe_form">
                    <div class="email_area">
                        <div><img src="src/img/email.svg" alt=""></div>
                        <input type="email" id="email_input" name="email_input" placeholder="email address">
                    </div>
                    <div>
                        <input type="submit" id="footer_btn_subscribe" value="subscribe">
                    </div>
                </form>
            </div>
        </div>
        <div class="social_footer_wrapper">
            <div class="social_footer">
                <p>Made with <span class="heart">&#10084;</span> by <a class="link_footer" href="https://www.webdonut.net/" target="_blank">WebDonut.net</a></p>
            </div>
        </div>
    </footer>`);
    }
    renderFooter();

    function handleForm() {
        $("#footer_btn_subscribe").click(function (event) {
            event.preventDefault();

            let formSubscribe = $('#subscribe_form');
            if (formSubscribe.find('input[name=email_input]').val() === '') {
                console.log('введите email');
                formSubscribe.after('<div class="error_subscribe"><sup>*</sup>Enter your email</div>');
                return false;
            }
        });
    }

    handleForm();

});