import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids'

import {letsDoThisData} from '../data/letsDoThisData'

import { ordersData, contextMenuItems, ordersGrid, lDTGrid} from '../data/dummy';

import { Header } from '../components'

import data from '../data/data.json'

function Participants() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="page" title='Participants' />
   
      <GridComponent id="gridcomp" dataSource={data} allowSorting>
        <ColumnsDirective>
                <ColumnDirective field='id' headerText="ID" width='100'/>
                <ColumnDirective field='firstName' headerText="First Name" width='100' textAlign="Right"/>
                <ColumnDirective field='lastName' headerText="Last Name" width='100' format="C2" textAlign="Right"/>
                <ColumnDirective field='status' headerText="Status" width='100'/>
        </ColumnsDirective>
        <Inject services={[Sort]} />
      </GridComponent>
    </div>
  )
}

export default Participants