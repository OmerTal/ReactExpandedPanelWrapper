# React Expanded Panel Wrapper
A Panel expender wrapper for react with typescript.

This library uses the [React-Modal npm package](https://www.npmjs.com/package/react-modal), it wrappes any component / data and making it expandable with a modal.

<br>
<br>

To use is, simply wrap the desired content to be expanded with the library's component like so:
```html
<ExpandedPanel>
    <div>
        This will be expanded
    </div>
</ExpandedPanel>
```
The result will be this:

Before:


After:

**note!**
=
**You must have the father component / div have a 'position: relative' css attribute for the icon's to always stick to the top left!**