import React from "react"
import { TabPanelStyled } from './TabPanel.styled'

export const TabPanel = ({ children, activeTab, index }) => {
    return <TabPanelStyled hidden={activeTab !== index}>{children}</TabPanelStyled>
}
