import React from 'react'
import styled from 'styled-components';
import ProductList from './ProductList.js'
// import FilterSection from './FilterSection.js';
import Sort from './Sort.js'
import { useFilterContext } from '../../Context/FilterContext.js';
const Products = () => {

  const {filter_products} = useFilterContext();
  console.log('filter_products', filter_products);

  return (
    <Wrapper>
      {/* <div className='container grid grid-filter-column'> */}
      <div className='container grid '>
        {/* <div>
         <FilterSection/>
         </div> */}

        <section className='product-view--sort'>
          <div className='sort-filter'>
          <Sort/>
          </div>
          <div className='main-product'>
            <ProductList/>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products