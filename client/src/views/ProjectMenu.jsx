import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/basic/Button'

import styles from '../styles/project.menu.style.module.css'

/**
 * 
 */
const ProjectMenu = props => {

    const { handleProjectClick, openContainer, projects } = props

    const [ projectType, setProjectType ] = useState('All')
    const [ developerRole, setDeveloperRole ] = useState('All')
    const [ categories, setCategories ] = useState(['All'])
    const [ showTags, setShowTags ] = useState(false)
    const [ chevronDirection, setChevronDirection ] = useState('down')

    const projectTypes = [ 'Personal Project', 'Professional Experience' ]
    const developerRoles = [ 'Frontend', 'Backend', 'Full Stack' ]
    const categoryFilters = [ 'MERN', 'React', 'Java', 'Javascript', 'Python', 'Bootstrap', 'All' ]
    // ['Desktop', 'Mobile', ]

    const handleProjectType = filter => setProjectType(filter);

    const handleDeveloperRole = filter => setDeveloperRole(filter);

    const handleCategorySelect = filter => {
        console.log(`filter => ${filter}`)
        if (filter === 'All') {
            setCategories(['All'])
            return
        }
        if (categories.indexOf(filter) === 0 && categories.length === 1) {
            console.log(categories.length)
            setCategories(['All'])
            return
        }
        // let newArray = []
        // let newArray = (categories.length === 1 && categories[0] === 'All') ? [] : [...categories]
        let newArray = (categories[0] === 'All') ? [] : [...categories]
        // let newArray = [...categories]
        if (categories.indexOf(filter) > -1) {
            const index = categories.indexOf(filter)
            newArray.splice(index, 1)
            console.log(newArray)
            // setCategories(newArray)
        } else {
            newArray.push(filter)
        }
        // if (newArray.length === 0) newArray = ['All']
        setCategories(newArray)
    }

    // const handleResetFilter = (e, filter) => {
    //     e.preventDefault();
    //     if (filter === 'dev') {
    //         setDeveloperRole('All')
    //     } else {
    //         setProjectType('All')
    //     }
    // }

    const renderProjectTypes = () => {
        if (!projectTypes || projectTypes.length < 1) return
        return (
            <ul className={styles.projectTypes}>
                {projectTypes.map((filter, index) => {
                    return (
                        <li className={filter === projectType ? styles.filterTabActive : styles.filterTab} onClick={() => handleProjectType(filter)} id={`filter-${filter}`} key={`${filter}-${index}`} >
                            {filter}
                        </li>
                    )
                })}
                <Button text={'reset'} size={'extraSmall'} color={'dark'} onClick={() => setProjectType('All')} />
            </ul>
        )
    }

    const renderDeveloperRoles = () => {
        if (!developerRoles || developerRoles.length < 1) return
        return (
            <ul className={styles.developerRoles} >
                {developerRoles.map((filter, index) => {
                    return (
                        <li className={filter === developerRole ? styles.filterTabActive : styles.filterTab} onClick={() => handleDeveloperRole(filter)} id={`filter-${filter}`} key={`${filter}-${index + 2}`} >
                            {filter}
                        </li>
                    )
                })}
                <Button text={'reset'} size={'extraSmall'} color={'dark'} onClick={() => setDeveloperRole('All')}/>
            </ul>
        )
    };

    const handleFilterClick = () => {
        setShowTags(!showTags)
        if (chevronDirection === 'down') {
            setChevronDirection('up')
        } else {
            setChevronDirection('down')
        }
    };

    const renderCategoryFilters = () => {
        if (!categoryFilters || categoryFilters.length < 1) return
        return (
            <div className={styles.categoryFiltersContainer} >
                <div className={showTags ? `${styles.tabContainer} ${styles.tabContainerActive}` : styles.tabContainer}>
                {/* <div className={styles.categoryMask}> */}
                <Button onClick={handleFilterClick} text={'Tags'} size={'medium'} color={'dark'} arrowDirection={chevronDirection} />
                </div>
                <ul className={!showTags ? styles.categoryFilters : `${styles.categoryFilters} ${styles.categoryFiltersActive}`} >
                    {categoryFilters.map((filter, index) => {
                        return (
                            <li className={categories.indexOf(filter) > -1 && showTags ? styles.filterSelectActive : styles.filterSelect} onClick={() => handleCategorySelect(filter)} id={`filter-${filter}`} key={`${filter}-${index + 5}`} >
                                {filter}
                            </li>
                        )
                    })}
                </ul>
                {/* </div> */}
            </div>
        )
    };

    const checkProjectTags = project => {
        let result = true
        for (const tag of categories) {
            // console.log(tag)
            // console.log(project.categories.indexOf(tag))
            if (project.categories.indexOf(tag) === -1 && categories[0] != "All") result = false
        }
        if (project.categories.indexOf(developerRole) === -1 && developerRole != "All") result = false
        if (project.categories.indexOf(projectType) === -1 && projectType != "All") result = false
        // console.log(result)
        return result
    }

    const renderProjectCard = (project, index) => {
        // <ul className={styles.projectsList}>
            // {projects.map((project, index) => {
                // use reduce here?????????????????????????????
                // if (checkProjectTags(project) || categories[0] === 'All') {
                    return (
                        <li className={styles.projectListItem} key={`project-card-${index}`}>
                            <ProjectCard 
                                handleProjectClick={handleProjectClick}
                                key={project._id}
                                index={index}
                                project={project}
                            />
                        </li>
                    )
                // }
            // })}
        // </ul>
    }

    // project.categories.indexOf(categories[0]) > -1

    useEffect(() => {
        // setTimeout(() => openContainer(), 500);
        openContainer();
    }, [])

    return (
        <div className={styles.menuWrapper}>
            <div className={styles.title}>My Work</div>
            <div className={styles.mainMenu} >
                <div className={styles.filtersListContainer} >
                    {/* <ul className={styles.filtersList}> */}
                        {renderProjectTypes()}
                        {/* <div style={{ width: '2px', borderLeft: '2px solid whitesmoke' }} ></div> */}
                        {renderDeveloperRoles()}
                        {/* {renderCategoryFilters()} */}
                    {/* </ul> */}
                        {/* {filters.map((filter, index) => {
                            return (
                                <li className={filter === category ? styles.filterTabActive : styles.filterTab} onClick={() => handleFilterClick(filter)} id={`filter-${filter}`} key={`${filter}-${index}`} >
                                    {filter}
                                </li>
                            )
                        })}
                    </ul> */}
                </div>
                {renderCategoryFilters()}
                <div className={styles.projectsListContainer}>
                    <ul className={styles.projectsList}>
                        {/* {renderProjectCards()} */}
                        {projects.map((project, index) => {
                            // use reduce here?????????????????????????????
                            if (checkProjectTags(project)) {
                            // if (checkProjectTags(project) || categories[0] === 'All') {
                                return (
                                    renderProjectCard(project, index)
                                    // <li className={styles.projectListItem}>
                                    //     <ProjectCard 
                                    //         handleProjectClick={handleProjectClick}
                                    //         key={project._id}
                                    //         index={index}
                                    //         project={project}
                                    //     />
                                    // </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
    // return (
    //     <div className={styles.menuWrapper}>
    //         <p className={styles.title} >Projects</p>
    //         <div className={styles.mainMenu} style={{ paddingTop: "3rem" }} >

    //             {/** @NOTE => to do: don't hard-code rows, just use flex-wrap */}
                
    //             <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "fit-content", margin: "auto" }}>
    //             {projects.map((project, idx) => {
    //                 if (idx % 2 === 0) return (
    //                     <ProjectCard handleClick={handleClick} key={idx} index={idx} project={project}/>
    //                 )
    //             })}
    //             </div>

    //             <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "fit-content", margin: "0 auto 2rem auto" }}>
    //             {projects.map((project, idx) => {
    //                 if (idx % 2 != 0) return (
    //                     <ProjectCard handleClick={handleClick} key={idx} index={idx} project={project}/>
    //                 )
    //             })}
    //             </div>
    //         </div>
    //     </div>
    // )
}
export default ProjectMenu