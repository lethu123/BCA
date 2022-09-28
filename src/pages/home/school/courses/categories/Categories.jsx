// ** React Imports
import React, {useState} from 'react'
// ** Categories components
import CategoriesCards from './CategoriesCards'
import CategoriesHeader from './CategoriesHeader'
import CategoriesSearchbar from './CategoriesSearchbar'

const CategoriesPage = () => {
  const [activeView, setActiveView] = useState('grid')
  return (
    <div className="content-detached content-right">
      <div className="content-body">
        <CategoriesHeader
          activeView={activeView}
          setActiveView={setActiveView}
        />

        <CategoriesSearchbar />

        <CategoriesCards activeView={activeView} />
      </div>
    </div>
  )
}

export default CategoriesPage
