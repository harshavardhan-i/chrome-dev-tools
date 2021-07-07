# chrome-dev-tools
Contains all the developments related to Chrome.

## Extensions basics
* Extensions are made of background scripts, content scripts, options page, UI element and various logic files.
* Extensions are built with HTML, CSS and JavaScript.
* Extensions start with manifest.json.
* Adding extension to Chrome.
    * Go to extensions
    * Turn on developer mode
    * Click on load unpacked.
* To enable funcitonality a background script must be added/registered to extension.
* Extensions can have many forms of UI
* To use Web APIs like storage it must be registered with manifest. As permissions key value.
* To use HTML files it must be added to manifest, to actions key.
* These HTML, CSS and JS together form the content.
* The manifest will need the activeTab permission to allow the
extension temporary access to the current page, and the scripting permission to use the Scripting API's executeScript method.