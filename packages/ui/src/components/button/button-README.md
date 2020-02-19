# Button

### Usage

```js
import { PrimaryButton, SecondaryButton } from '@pma/ui';

render() {
  return (
    <PrimaryButton>Click button!</PrimaryButton>
    <PrimaryButton.Large>Click large button!</PrimaryButton.Large>
    <SecondaryButton>Click secondary button!</SecondaryButton>
    <SecondaryButton.Large>Click large secondary button!</SecondaryButton.Large>
  );
}
```

<!-- STORY -->

### Properties

- `onClick` - event on click
- `disabled` - disabled state
- `children` - button content
- `type` - type of the button
- `className` - override button styles

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| onClick   | func     | -            | +          |
| disabled  | bool     | false        | -          |
| children  | node     | -            | +          |
| type      | string   | button       | -          |
| className | string   | ''           | -          |

### Types

| type   | description    |
| ------ | -------------- |
| button | default action |
| reset  | reset form     |
| submit | submit form    |

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
