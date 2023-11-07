# Pusher trigger action

This action triggers an event on a [Pusher](https://pusher.com/) channel.

## Inputs

### `app-id`

**Required** Pusher app ID.

### `app-key`

**Required** Pusher app key.

### `app-secret`

**Required** Pusher app secret.

### `app-cluster`

**Required** Pusher app cluster.

### `channel`

**Required** Pusher channel.

### `event`

**Required** Event name.

### `message`

Stringified JSON to pass as event message.

## Example usage

```yaml
uses: actions/pusher-trigger@v1.0.0
with:
  app-id: PUSHER_APP_ID
  app-key: PUSHER_APP_KEY
  app-secret: PUSHER_APP_SECRET
  app-cluster: PUSHER_APP_CLUSTER
  channel: my-channel
  event: my-event
  message: '{text: "hello world"}'
```
