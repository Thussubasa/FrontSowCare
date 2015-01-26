var app = new senna.App();
app.addSurfaces('content');
app.setLinkSelector(".senna-links");
app.addRoutes([
    new senna.Route('page/main.html', senna.HtmlScreen),
]);
