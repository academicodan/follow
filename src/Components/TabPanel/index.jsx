export const TabPanel = ({ children, activeTab, index }) => {
  return <div hidden={activeTab !== index}>{children}</div>;
};
