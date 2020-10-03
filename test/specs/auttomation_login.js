

describe('Login automation', () => {

    it('Title of automation webpage', () => {
        browser.url('http://automationpractice.com/index.php');
        browser.setTimeout({ 'pageLoad': 10000 });
        browser.maximizeWindow();
        expect(browser).toHaveTitle('My Store')
        
        
    });

    it('Launch signin page and verify the title', () => {
        browser.setTimeout({ 'implicit': 5000 })
        const signin = $('.login')
        signin.click();
        browser.setTimeout({ 'pageLoad': 10000 });
        expect(browser).toHaveTitle('Login - My Store') 
    });
    it('Provide email and complete registration', () => {
        browser.setTimeout({ 'implicit': 5000 })
        const email_address = $('#email_create')
        const reg_btn = $('#SubmitCreate');

        email_address.addValue('meet2grk@gmail.com');
        reg_btn.click();
        expect(browser).toHaveUrl('http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation') 
    });
    it('provide account details and Create an account', () => {
        browser.setTimeout({ 'implicit': 5000 })
        const mr_btn_clk = $('#uniform-id_gender1')
        const enter_firstname = $('#customer_firstname')
        const enter_lastname =$('#customer_lastname')
        const enter_passwd =$('#passwd')
        const email_id = $('input[value]#email')
        
        const sel_day=$("#days")
        const sel_month=$("#months")
        const sel_year =$("#years")
        const ent_fname =$('#firstname')
        const ent_lname =$('#lastname')
        const ent_address = $('#address1')
        const ent_city =$('#city')
        const sel_state =$('#id_state')
        const ent_zipcode = $('#postcode')
        const phnum = $('#phone_mobile')
        const ent_addref =$('#alias')
        const rege_btn = $('button#submitAccount')
       //select radio button mr
        mr_btn_clk.click();
        //enter first name
        enter_firstname.addValue('ram');
        // enter last name
        enter_lastname.addValue('krishna');
        //to check mail id present or not
        expect(email_id).toHaveAttributeContaining('value', 'meet2grk');
        //enter password
        enter_passwd.addValue('welcome12#');
        //select day from dropdown list
        sel_day.selectByIndex(28);
          //select month from dropdown list
        sel_month.selectByAttribute("value", "8");
          //select year from dropdown list
        sel_year.selectByAttribute("value", "1988");
        //assert which is entered first name is matching or not
        expect(ent_fname).toHaveAttributeContaining('value', 'ram');
        //assert which is entered last name is matching or not
        expect(ent_lname).toHaveAttributeContaining('value', 'krishna');
        
        //enter address 
        ent_address.addValue('591 Grand Avenue');
        ent_city.addValue('San Marcos');
        sel_state.selectByAttribute("value", "5");
        ent_zipcode.addValue('92069')
        phnum.scrollIntoView();
        phnum.addValue('7989965411');
        ent_addref.addValue('591 Grand Avenue');
        rege_btn.click();

        
        browser.pause(3000);
        expect(browser).toHaveUrl('http://automationpractice.com/index.php?controller=my-account') 
    });


    
});