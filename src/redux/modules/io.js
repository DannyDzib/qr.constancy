const START_CHANNEL = 'START_CHANNEL'
const STOP_CHANNEL = 'STOP_CHANNEL'
const CHANNEL_ON = 'CHANNEL_ON'
const CHANNEL_OFF = 'CHANNEL_OFF'
const SERVER_ON = 'SERVER_ON'
const SERVER_OFF = 'SERVER_OFF'

const connectionState = {
  channelStatus: 'off',
  serverStatus: 'unknown',
}

const ioReducer = (state = connectionState, action) => {
  switch (action.type) {
    case CHANNEL_ON:
      return state.set('channelStatus', 'on')

    case CHANNEL_OFF:
      return state.set('channelStatus', 'off').set('serverStatus', 'unknown')

    case SERVER_OFF:
      return state.set('serverStatus', 'off')

    case SERVER_ON:
      return state.set('serverStatus', 'on')

    default:
      return state
  }
}

export default ioReducer

export const startChannel = () => ({ type: START_CHANNEL })
export const stopChannel = () => ({ type: STOP_CHANNEL })
