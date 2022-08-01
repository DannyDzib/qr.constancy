import { createContext } from "react"

export const initialState = {
  title: null,
  show: false,
  body: null,
  actionButtons: null,
  isDismissible: true,
  configProps: {
    maxWidth: false, // oneOf ["lg","md","sm","xl","xs",false]
    width: 'xs', // oneOf ["lg","md","sm","xl","xs"]
    className: null,
    showDividers: false,
    scroll: "paper", // oneOf ["paper", "body"]
    showClose: false,
    isFormattedTitle: false,
  },
}

export const ModalContext = createContext()