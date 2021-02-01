import React from 'react';
import styled from 'styled-components';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { closeMenu } from '../../actions';
import heroImage from '../../assets/Hero.png';

import { useWindowSize } from '../../hooks';

const SideMenuWrapper = styled.div`
  position: fixed;
  background-color: white;
  display: flex;
  flex-direction: row-reverse;
  top: 200px;
  width: 70%;
  left: 15%;
  ${({ isMobile }) => isMobile && `
    flex-direction: column;
    top: 45px;
    bottom: 0px;
    width: 80%;
    left: 0%;
  `}
`;

const CloseIconWrapper = styled.div`
  height: 50px;
  margin-right: 5px;  
  margin-top: 10px;
`;

const AccordionWrapper = styled.div`
  margin: 40px;
  display: flex;
  column-gap: 90px;
  align-items: flex-start;
  ${({ isMobile }) => !isMobile && `
    width: 100%;
  `}
  ${({ isMobile }) => isMobile && `
    margin-left: 20px;
    margin-top: 0px;
    flex-direction: column;
  `}
`;

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    padding: '0px',
    maxHeight: 45,
  },
  content: {
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
  root: {
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
  },
}))(MuiAccordionDetails);

const MainCatText = styled.div`
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 45px;
`;

const SubCatText = styled.div`
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 38px;
`;

const BottomWrapper = styled.div`
  background-color: #EFEFEF;
  display: flex;
  ${({ isMobile }) => isMobile && `
    width: 100%;
    height: 175px;
    position: absolute;
    bottom: 0;
  `}

`;

const BottomImage = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  margin: 20px;
  ${({ isMobile }) => isMobile && `
    height: 140px;
    width: 100px;
  `}
`;

const BottomItemWrapper = styled.div`
  margin: 50px;
  ${({ isMobile }) => isMobile && `
    margin: 10px;
  `}
  display: flex;
  flex-direction: column;
  column-gap: 10px;
`;

const menuData = [
  {
    mainCat: 'TOPS',
    subCats: [
      'T-Shirts',
      'Short Sleeve',
      'Long Sleeve',
    ],
  },
  {
    mainCat: 'BOTTOMS',
    subCats: [
      'Shorts',
      'Pants',
    ],
  },
];

const botItems = [
  'Shop All', 'New Arrivals', 'Favorits', 'Sales',
];

const SideMenu = () => {
  const size = useWindowSize();

  const isMobile = size.width < 1024;

  const dispatch = useDispatch();
  return (
    <SideMenuWrapper isMobile={isMobile}>
      {
        isMobile ? (
          <CloseIconWrapper>
            <HighlightOffIcon className="float-right" fontSize="large" onClick={() => { dispatch(closeMenu()); }} />
          </CloseIconWrapper>
        ) : null
      }

      <AccordionWrapper isMobile={isMobile}>
        {menuData.map(item => (
          <Accordion square defaultExpanded>
            <AccordionSummary
              expandIcon={isMobile ? <ExpandMoreIcon /> : null}
            >
              <MainCatText className="text-subtitle">{item.mainCat}</MainCatText>
            </AccordionSummary>
            <AccordionDetails>
              {
              item.subCats.map(entry => (
                <SubCatText className="text-subtitle">{entry}</SubCatText>
              ))
            }
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionWrapper>

      <BottomWrapper isMobile={isMobile}>
        <BottomImage isMobile={isMobile} src={heroImage} />
        <BottomItemWrapper isMobile={isMobile}>
          {botItems.map(item => (
            <SubCatText className="text-subtitle">{item}</SubCatText>
          ))}
        </BottomItemWrapper>
      </BottomWrapper>
    </SideMenuWrapper>
  );
};

export default SideMenu;
