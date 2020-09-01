export const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react</title>
    <script src="/static/client.js" type="application/javascript"></script>
</head>
<body>
    <div id="react__root">${content}</div>
</body>
</html>
`;