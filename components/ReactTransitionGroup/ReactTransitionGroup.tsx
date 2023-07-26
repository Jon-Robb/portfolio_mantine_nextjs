// import React, { useState, createRef, use, useEffect } from 'react';
// import {
//     Container,
//     ListGroup,
//     Button,
// } from 'react-bootstrap';
// import {
//     CSSTransition,
//     TransitionGroup,
// } from 'react-transition-group';
// import { v4 as uuid } from 'uuid';
// import ProjectCard from '../ProjectCard/ProjectCard';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import useStyles from './ReactTransitionGroup.styles';
// import { ProjectsData } from '../../data/ProjectsData';

// export default function TodoList({ visibleCount } : { visibleCount: number }) {
//     const { classes } = useStyles();
//     // const [visibleCount, setVisibleCount] = useState(0);
//     //   const [items, setItems] = useState(() => [
//     //     {
//     //       id: uuid(),
//     //       text: 'Buy eggs',
//     //       nodeRef: createRef(),
//     //     },
//     //     {
//     //       id: uuid(),
//     //       text: 'Pay bills',
//     //       nodeRef: createRef(),
//     //     },
//     //     {
//     //       id: uuid(),
//     //       text: 'Invite friends over',
//     //       nodeRef: createRef(),
//     //     },
//     //     {
//     //       id: uuid(),
//     //       text: 'Fix the TV',
//     //       nodeRef: createRef(),
//     //     },
//     //   ]);
//     const [items, setItems] = useState(() => ProjectsData.slice(0, visibleCount));
//     useEffect(() => {
//         setItems(ProjectsData.slice(0, visibleCount));
//     }, [visibleCount]);
//     return (
//         <div>

//             <TransitionGroup style={{ display: 'grid' }}>
//                 {items.map((projectCard) => (
//                     <CSSTransition
//                       key={projectCard.id}
//                       nodeRef={projectCard.nodeRef}
//                       timeout={500}
//                       classNames={{
//                             enter: classes.enter,
//                             enterActive: classes.enterActive,
//                             exit: classes.exit,
//                             exitActive: classes.exitActive,
//                         }}
//                     >
//                         {/* <ListGroup.Item ref={nodeRef}>
//                             <Button
//                               className="remove-btn"
//                               variant="danger"
//                               size="sm"
//                               onClick={() =>
//                                     setItems((items) =>
//                                         items.filter((item) => item.id !== id)
//                                     )
//                                 }
//                             >
//                                 &times;
//                             </Button> */}
//                             <div ref={projectCard.nodeRef}>
//                                 <ProjectCard
//                                   {...projectCard}
//                                 />


//                             </div>
//                         {/* </ListGroup.Item> */}
//                     </CSSTransition>
//                 ))}
//             </TransitionGroup>
//             {/* <Button
//               onClick={() => {
//                     // const text = prompt('Enter some text');
//                     // if (text) {
//                         // setItems((items) => [
//                         //     ...items,
//                         //     {
//                         //         id: uuid(),
//                         //         description: text,
//                         //         nodeRef: createRef(),

//                         //     },
//                         // ]);
//                         // setVisibleCount(visibleCount + 1);
//                     // }
//                 }}
//             >
//                 Add Item
//             </Button> */}
//         </div>
//     );
// }

// // const container = document.getElementById('root');
// // const root = createRoot(container);
// // root.render(<TodoList />);
