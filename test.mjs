import { describe } from "mocha";
import wd from "wd";



const desiredCaps = {
  platformName: "Android",
  udid: "127.0.0.1:57228" ,
  app: "C:/Users/MSI/AndroidStudioProjects/ContactList/app/build/outputs/apk/debug/app-debug.apk",
  platformVersion: "12"
};

const driver = wd.promiseChainRemote({
    host: 'localhost',
    port: 4723
  });

  describe("Insert Contact", () => {

    before(async () => {
      await driver.init(desiredCaps);
    });
   

    

    it('Should Click on Add Contact', async (done) => {
        setTimeout(async function() {
            const addButton = 
            driver.
            elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button")
            .click()
            .then(() => console.log('Clicked on Add Contact'))
            .catch((err) => console.error('Could not click on Add Contact', err))
        }, 3000);
        done();
      });

      it('Should Enter Name', async (done) => {
        setTimeout(async function() {
            const name = 
            driver.
            elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[1]")
            .sendKeys("Foulen")
            .then(() => console.log('Entered Name'))
            .catch((err) => console.error('Could not enter name', err))
        }, 5000);
        done();
      });

      it('Should Enter LastName', async (done) => {
        setTimeout(async function() {
            const name = 
            driver.
            elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[2]")
            .sendKeys("Ben Foulen")
            .then(() => console.log('Entered LastName'))
            .catch((err) => console.error('Could not enter Lastname', err))
        }, 6000);
        done();
      });

      it('Should Enter City', async (done) => {
        setTimeout(async function() {
            const name = 
            driver.
            elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[3]")
            .sendKeys("Esprit City")
            .then(() => console.log('Entered City'))
            .catch((err) => console.error('Could not enter City', err))
        }, 7000);
        done();
      });

      it('Should Enter Email', async (done) => {
        setTimeout(async function() {
            const name = 
            driver.
            elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[4]")
            .sendKeys("esprit@esprit.tn")
            .then(() => console.log('Entered Email'))
            .catch((err) => console.error('Could not enter Email', err))
        }, 8000);
        done();
      });

      it('Should Enter Phone', async (done) => {
        setTimeout(async function() {
            const name = 
            driver.
            elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[5]")
            .sendKeys("98765432")
            .then(() => console.log('Entered Phone'))
            .catch((err) => console.error('Could not enter Phone', err))
        }, 9000);
        done();
      });

      it('Should Click on Date', async (done) => {
      setTimeout(async function() {
        const dateButton = 
        driver.
        elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.view.View[2]/android.widget.Button")
        .click()
        .then(() => console.log('Clicked on Date'))
        .catch((err) => console.error('Could not click on Date', err))
      }, 10000);
      done();
    })

      it('Should Click on Specific Date', async (done) => {
        setTimeout(async function() {
            const dateButton = 
            driver.
            elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[2]/android.view.View[23]")
            .click()
            .then(() => console.log('Clicked on Date'))
            .catch((err) => console.error('Could not click on Date', err))
        }, 11000);
        done();
      });

      it('Should Click on OK', async (done) => {
        setTimeout(async function() {
            const okButton = 
            driver.
            elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[2]")
            .click()
            .then(() => console.log('Clicked on OK'))
            .catch((err) => console.error('Could not click on OK', err))
        }, 12000)
        done();    
    });

        it('Should Click on Save', async (done) => {
            setTimeout(async function() {
                const saveButton = 
                driver.
                elementByXPath("//android.view.View[@content-desc='Save contact']")
                .click()
                .then(() => console.log('Clicked on Save'))
                .catch((err) => console.error('Could not click on Save', err))
            }, 13000)
            done();    
        });
  });

  describe("Delete Contact", () => {
    it('Should Click on Delete Icon', async (done) => {
        setTimeout(async function() {
            const deleteButton = 
            driver.
            elementByXPath("//android.view.View[@content-desc='Delete']")
            .click()
            .then(() => console.log('Clicked on Delete'))
            .catch((err) => console.error('Could not click on Delete', err))
        }, 14000)
        done();
    })

    it('Should Click on Yes', async (done) => {
        setTimeout(async function() {
            const deleteButton = 
            driver.
            elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button")
            .click()
            .then(() => console.log('Clicked on Yes'))
            .catch((err) => console.error('Could not click on Yes', err))
        }, 15000)
        done();
    })
   
  });