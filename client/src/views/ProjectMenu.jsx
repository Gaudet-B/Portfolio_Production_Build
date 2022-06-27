import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'

import styles from '../styles/project.menu.style.module.css'

/**
 * 
 */
const ProjectMenu = props => {

    const { handleProjectClick, openContainer, projects } = props

    const [ category, setCategory ] = useState('All')

    const filters = [ 'Frontend', 'Backend', 'Full Stack', 'MERN', 'React', 'Java' ]
    // , 'Javascript', 'Python', 'Desktop', 'Mobile', 'Bootstrap', 'All' ]

    const handleFilterClick = filter => setCategory(filter);

    return (
        <div className={styles.menuWrapper}>
            <p className={styles.title} >Projects</p>
            <div className={styles.mainMenu} style={{ paddingTop: "3rem" }} >
                <div className={styles.filtersListContainer} >
                    <ul className={styles.filtersList}>
                        {filters.map((filter, index) => {
                            return (
                                <li className={filter === category ? styles.filterTabActive : styles.filterTab} onClick={() => handleFilterClick(filter)} id={`filter-${filter}`} key={`${filter}-${index}`} >
                                    {filter}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.projectsListContainer}>
                    <ul className={styles.projectsList}>
                        {projects.map((project, index) => {
                            if (project.categories.indexOf(category) > -1 || category === 'All') {
                                return (
                                    <li className={styles.projectListItem}>
                                        <ProjectCard 
                                            handleProjectClick={handleProjectClick}
                                            key={project._id}
                                            index={index}
                                            project={project}
                                        />
                                    </li>
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