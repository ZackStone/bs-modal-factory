# bootstrap3-dialog
I'm using now bootstrap3-dialog. Check it:
https://github.com/nakupanda/bootstrap3-dialog

# bs-modal-factory

```js
$.modalFactory({
  id: 'myModalId',
  buttons: [
    {
      text: 'Click me...', cssClass: 'primary',
      onClick: function () { alert('Hello!') }
    },
    { text: 'Close modal', cssClass: 'default', dataDismiss: true }
  ]
}).modal('show');
    
$.ajax({
  type: "GET",
  cache: false,
  url: "...",
  success: function (data) {
    $.modalFactory({
      id: 'myFirstModal',
      title: 'My First Modal',
      body: data
    }).modal('show');
  }
});
```
