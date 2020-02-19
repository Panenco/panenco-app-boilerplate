# Grid

### Usage

```js
import { Row, Col } from '@pma/ui';

render() {
  return (
    <Row>
      <Col s='6'>{children}</Col>
      <Col s='3'>{children}</Col>
      <Col s='3'>{children}</Col>
    </Row>
  );
}
```

<!-- STORY -->

### Row Properties

- `className` - override column styles
- `children` - column content

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | null         | -          |
| children  | node     | null         | -          |

### Column Properties

- `s` - size of columns
- `m` - size of columns
- `l` - size of columns
- `className` - override column styles
- `children` - column content

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| s         | string   | null         | -          |
| m         | string   | null         | -          |
| l         | string   | null         | -          |
| className | string   | null         | -          |
| children  | node     | null         | -          |
