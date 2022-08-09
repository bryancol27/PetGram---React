import React, { useState, useEffect } from 'react'

const useCategoriesData = () => {

  const [ categories, setCategories ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true)
    const fetchData = async() => await fetch('https://petgram-project-bryancol27-bryancol27.vercel.app/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
      .catch(error => console.error(error))

      fetchData()
  }, []);
  
  return {  
    categories,
    loading
  }
};

export { useCategoriesData };
