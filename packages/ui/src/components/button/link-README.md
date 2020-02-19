# Link

### Usage

```js
import { PrimaryButtonLink, SecondaryButtonLink } from '@pma/ui';

render() {
  return (
    <PrimaryButtonLink to={pathToRedirect}>Click button link!</PrimaryButtonLink>
    <PrimaryButtonLink.Large to={pathToRedirect}>Click large button link!</PrimaryButtonLink.Large>
    <SecondaryButtonLink to={pathToRedirect}>Click secondary button link!</SecondaryButtonLink>
    <SecondaryButtonLink.Large to={pathToRedirect}>Click secondary large button link!</SecondaryButtonLink.Large>
  );
}
```

<!-- STORY -->

### Properties

- `to` - path to redirect
- `disabled` - disabled state
- `children` - link content
- `className` - override button styles

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| to        | string   | -            | +          |
| disabled  | bool     | false        | -          |
| children  | node     | -            | +          |
| className | string   | ''           | -          |
