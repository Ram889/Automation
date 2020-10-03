describe('login the Automation webapp', () => {

    it('login  with valid username and password', () => {

        browser.url('http://automationpractice.com/index.php');
        browser.maximizeWindow();
        browser.deleteCookies();
        browser.setTimeout({ 'pageLoad': 10000 });

        const signin = $('.login')
        const ent_emailid = $('#email')
        const ent_passwd = $('#passwd')
        const clk_submit = $('#SubmitLogin')
        signin.click();
        ent_emailid.addValue('meet2grk@gmail.com');
        ent_passwd.addValue('welcome12#');
        clk_submit.click();
        browser.pause(3000);
        expect(browser).toHaveTitle("My account - My Store")
    });
    it('Added a product', () => {
        const click_cart = $('#search_query_top')
        const clk_add_cart = $('#center_column>ul>li:nth-child(1)>div>div:nth-child(2)>div.button-container>a:nth-child(1)')
        const img_hover=$('ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link > img')
        const clk_prcdchkout = $('#layer_cart>div:nth-child(1)>div:nth-child(2)>div:nth-child(5)>a>span')
        click_cart.addValue('dress')
        browser.keys('Enter');
        img_hover.moveTo(30,60);
       
        clk_add_cart.click();
        browser.setTimeout({ 'pageLoad': 10000 });

        clk_prcdchkout.click();
        browser.pause(2000);
    });
    
});