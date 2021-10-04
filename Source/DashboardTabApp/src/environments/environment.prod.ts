export const environment = {
    production: false,
    apiBaseUrl: "https://hsdfrage-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "2bc2d6df-bd83-4beb-af4c-681767093733",
        clientId: "9853f39d-7d09-4336-b8c4-d3c31ad342e9",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
