# API Reference

::: info
`?` means that the parameter/property is optional.
:::

## run

Configures the plugin with the provided config. object.

- **Type**

    ```javascript
    function(config: object): Promise<void>
    ```
- **Details**

    The `config` argument is required and must contain — at least — the `categories` and `language` properties (both properly configured). Check out how to set up [categories](/reference/configuration-reference.html#categories) and [translations](/reference/configuration-reference.html#languages-and-translations).

- **Example**
    ```javascript
    cc.run({
        categories: {
            // categories here
        },
        language: {
            default: 'en',

            translations: {
                en: {
                    // modal translations here
                }
            }
        }
    });
    ```


## show

Shows the consent modal.

- **Type**

    ```javascript
    function(createModal?: boolean): void
    ```
- **Details**

   If consent was previously expressed, the consent modal will not be generated; you'll have to pass the argument `true` to generate it on the fly.

- **Example**
    ```javascript
    cc.show();

    // show modal (if it doesn't exist, create it)
    cc.show(true);
    ```

## hide

Hides the consent modal.

- **Type**

    ```javascript
    function(): void
    ```

- **Example**
    ```javascript
    cc.hide();
    ```

## showPreferences

Shows the preferences modal.

- **Type**

    ```javascript
    function(): void
    ```

- **Example**
    ```javascript
    cc.showPreferences();
    ```


## hidePreferences

Hides the preferences modal.

- **Type**

    ```javascript
    function(): void
    ```

- **Example**
    ```javascript
    cc.hidePreferences();
    ```

## acceptCategory

Accepts or rejects categories.

- **Type**

    ```javascript
    function(
        categoriesToAccept?: string | string[],
        exclusions?: string[]
    ): void
    ```
- **Details**

    The first argument accepts either a `string` or an `array` of strings. Special values:

    - `'all'`: accept all
    - `[]`: empty array, accept none (reject all)
    - ` `: empty argument, accept only the categories selected in the preferences modal

- **Examples**
    ```javascript
    cc.acceptCategory('all');                // accept all categories
    cc.acceptCategory([]);                   // reject all (accept only categories marked as readOnly/necessary)
    cc.acceptCategory();                     // accept currently selected categories inside the preferences modal

    cc.acceptCategory('analytics');          // accept only the "analytics" category
    cc.acceptCategory(['cat_1', 'cat_2']);   // accept only these 2 categories

    cc.acceptCategory('all', ['analytics']); // accept all categories except the "analytics" category
    cc.acceptCategory('all', ['cat_1', 'cat_2']); // accept all categories except these 2
    ```


## acceptedCategory

Returns `true` if the specified category was accepted, otherwise `false`.

- **Type**

    ```javascript
    function(categoryName: string): boolean
    ```

- **Examples**
    ```javascript
    if(cc.acceptedCategory('analytics')){
        // great
    }

    if(!cc.acceptedCategory('ads')){
        // not so great
    }
    ```

## acceptService

Accepts or rejects services.

- **Type**

    ```javascript
    function(
        services: string | string[],
        category: string
    ): void
    ```
- **Details**

    Special values for the `services` argument:

    - `'all'`: accept all services
    - `[]`: empty array, accept none (reject all)

- **Examples**
    ```javascript
    cc.acceptService('all', 'analytics');   // accept all services (in the 'analytics' category)
    cc.acceptService([], 'analytics');      // reject all services

    cc.acceptService('service1', 'analytics');     // accept only this specific service (reject all the others)
    cc.acceptService(['service1', 'service2'], 'analytics');   // accept only these 2 services (reject all the others)
    ```

## acceptedService

Returns `true` if the service inside the category is accepted, otherwise `false`.

- **Type**

    ```javascript
    function(
        serviceName: string,
        categoryName: string
    ): boolean
    ```

- **Examples**
    ```javascript
    if(cc.acceptedService('Google Analytics', 'analytics')){
        // great
    }else{
        // not so great
    }
    ```

## validConsent
Returns `true` if consent is valid.

- **Type**
    ```javascript
    function(): boolean
    ```
- **Details**


    Consent is not valid when at least one of following situations occurs:
    - consent is missing (e.g. user has not yet made a choice)
    - revision numbers don't match
    - the plugin's cookie does not exist/has expired
    - the plugin's cookie is structurally not valid (e.g. empty)


- **Example**
    ```javascript
    if(cc.validConsent()){
        // consent is valid
    }else{
        // consent is not valid
    }
    ```

## validCookie

Returns `true` if the specified cookie is valid (it exists and its content is not empty).

- **Type**

    ```javascript
    function(cookieName: string): boolean
    ```

- **Details** <br>

    This method cannot detect if the cookie has expired as such information cannot be retrieved with javascript.

- **Example** <br>

    Check if the `'gid'` cookie is set.

    ```javascript
    if(cc.validCookie('_gid')){
        // _gid cookie is valid!
    }else{
        // _gid cookie is not set ...
    }
    ```

## eraseCookies

Removes one or multiple cookies.

- **Type**

    ```javascript
    function(
        cookies: string | RegExp | (string | RegExp)[],
        path?: string,
        domain?: string
    ): void
    ```

- **Examples** <br>

    Delete the plugin's own cookie

    ```javascript
    cc.eraseCookies('cc_cookie');
    ```

    Delete the `_gid` and all cookies starting with `_ga`:
    ```javascript
    cc.eraseCookies(['_gid', /^_ga/], '/', location.hostname);
    ```



## loadScript

Loads script files (`.js`).

- **Type**

    ```javascript
    function(
        path: string,
        attributes?: { name: string, value: string }[]
    ): Promise<boolean>
    ```

- **Examples** <br>

    ```javascript
    // basic way
    cc.loadScript('path-to-script.js');

    // recommended way (catch exceptions)
    cc.loadScript('path-to-script.js')
        .catch(() => console.log('Script failed to load!'));

    // check if a script is loaded successfully
    cc.loadScript('path-to-script.js')
        .then((success) => {
            if(success) {
                // script loaded successfully
            }
        })
        .catch(() => console.log('Script failed to load!'));
    ```

    You may also concatenate multiple `.loadScript` methods:
    ```javascript
    cc.loadScript('path-to-script1.js')
        .then(() => cc.loadScript('path-to-script2.js'))
        .then(() => cc.loadScript('path-to-script3.js'))
        .catch(() => console.log('Loading failed'))
    ```

    Load script with attributes:
    ```javascript
    cc.loadScript('path-to-script.js', [
        {name: 'id', value: 'ga_script'},
        {name: 'another-attribute', value: 'value'}
    ]);
    ```


## getCookie

Returns the plugin's own cookie, or just one of the fields.

- **Type**
    ```javascript
    function(
        field?: string,
        cookieName?: string,
    ): any | {
        categories: string[],
        revision: number,
        data: any,
        consentId: string
        consentTimestamp: string,
        lastConsentTimestamp: string,
        services: {[key: string]: string[]}
    }
    ```

- **Example**
    ```javascript
    // Get only the 'data' field
    const data = cc.getCookie('data');

    // Get all fields
    const cookieContent = cc.getCookie();
    ```

## getConfig

Returns the configuration object or one of its fields.

- **Type**
    ```javascript
    function(field?: string): any
    ```

- **Example**
    ```javascript
    // Get the entire config
    const config = cc.getConfig();

    // Get only the language' prop.
    const language = cc.getConfig('language');
    ```

## getUserPreferences

Returns user's preferences, such as accepted/rejected categories and services.

- **Type**

    ```javascript
    function(): {
        acceptType: string,
        acceptedCategories: string[],
        rejectedCategories: string[],
        acceptedServices: {[key: string]: string[]}
        rejectedServices: {[key: string]: string[]}
    }
    ```
- **Details**

    Possible `acceptType` values:
    - `'all'`
    - `'custom'`
    - `'necessary'`

- **Example** <br>

    ```javascript
    const preferences = cc.getUserPreferences();

    if(preferences.acceptType === 'all'){
        console.log("Awesome!");
    }

    if(preferences.acceptedCategories.includes('analytics')){
        console.log("The analytics category was accepted!");
    }
    ```


## setLanguage
Changes the modal's language. Returns a `Promise<boolean>` which evaluates to `true` if the language was changed successfully.

- **Type**
    ```javascript
    function(
        language: string,
        force?: boolean
    ): Promise<boolean>
    ```

- **Examples** <br>

    ```javascript
    // Simple usage
    cc.setLanguage('it');

    // Get return value
    const success = await cc.setLanguage('en');
    ```

    Forcefully refresh modals (re-generates the html content):
    ```javascript
    cc.setLanguage('en', true);
    ```

## setCookieData
Save custom data into the cookie. Returns `true` if the data was set successfully.

- **Type** <br>

    ```javascript
    function({
        value: any,
        mode?: string
    }): boolean
    ```

- **Details**

    Valid `mode` values:
    - `'update'` sets the new value only if its different from the previous value, and both are of the same type.
    - `'overwrite'` (default): always sets the new value (overwrites any existing value).

    ::: info
    The `setCookieData` method does not alter the cookies' current expiration time.
    :::


- **Examples** <br>

    ```javascript
    // First set: true
    cc.setData({
        value: {id: 21, lang: 'it'}
    }); //{id: 21, lang: 'it'}

    // Change only the 'id' field: true
    cc.setData({
        value: {id: 22},
        mode: 'update'
    }); //{id: 22, lang: 'it'}

    // Add a new field: true
    cc.setData({
        value: {newField: 'newValue'},
        mode: 'update'
    }); //{id: 22, lang: 'it', newField: 'newValue'}

    // Change 'id' to a string value: FALSE
    cc.setData({
        value: {id: 'hello'},
        mode: 'update'
    }); //{id: 22, lang: 'it', newField: 'newValue'}

    // Overwrite: true
    cc.setData({
        value: 'overwriteEverything'
    }); // 'overwriteEverything'
    ```