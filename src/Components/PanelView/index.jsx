import React from 'react'
import MaterialTable from 'material-table'
import { TabPanel } from '../TabPanel'
import { PanelViewStyled } from './PanelView.styled'

export const PanelView = ({ activeTab, rowData, columnData, isLoading }) => {
    return (
        <PanelViewStyled>
            <TabPanel activeTab={activeTab} index={0}>
                <MaterialTable
                    title={''}
                    data={rowData[0]}
                    columns={columnData[0]}
                    style={{ width: '100%' }}
                    options={{
                        paging: false,
                    }}
                    isLoading={isLoading}
                />
            </TabPanel>
            <TabPanel activeTab={activeTab} index={1}>
                <MaterialTable
                    title={''}
                    data={rowData[1]}
                    columns={columnData[1]}
                    style={{ width: '100%' }}
                    options={{
                        paging: false,
                    }}
                    isLoading={isLoading}
                />
            </TabPanel>
            <TabPanel activeTab={activeTab} index={2}>
                <MaterialTable
                    title={''}
                    data={rowData[2]}
                    columns={columnData[2]}
                    style={{ width: '100%' }}
                    options={{
                        paging: false,
                    }}
                    isLoading={isLoading}
                />
            </TabPanel>
            <TabPanel activeTab={activeTab} index={3}>
                <MaterialTable
                    title={''}
                    data={rowData[3]}
                    columns={columnData[3]}
                    style={{ width: '100%' }}
                    options={{
                        paging: false,
                    }}
                    isLoading={isLoading}
                />
            </TabPanel>
            <TabPanel activeTab={activeTab} index={4}>
                <MaterialTable
                    title={''}
                    data={rowData[4]}
                    columns={columnData[4]}
                    style={{ width: '100%' }}
                    options={{
                        paging: false,
                    }}
                    isLoading={isLoading}
                />
            </TabPanel>
            <TabPanel activeTab={activeTab} index={5}>
                <MaterialTable
                    title={''}
                    data={rowData[5]}
                    columns={columnData[5]}
                    style={{ width: '100%' }}
                    options={{
                        paging: false,
                    }}
                    isLoading={isLoading}
                />
            </TabPanel>
            <TabPanel activeTab={activeTab} index={6}>
                <MaterialTable
                    title={''}
                    data={rowData[6]}
                    columns={columnData[6]}
                    style={{ width: '100%' }}
                    options={{
                        paging: false,
                    }}
                    isLoading={isLoading}
                />
            </TabPanel>
        </PanelViewStyled>
    )
}
