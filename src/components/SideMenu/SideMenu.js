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

const SideMenuWrapper = styled.div`
  position: fixed;
  top: 45px;
  bottom: 0px;
  width: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const CloseIconWrapper = styled.div`
  height: 50px;
  margin-right: 5px;  
  margin-top: 10px;
`;

const AccordionWrapper = styled.div`
  margin-right: 10px;
  margin-left: 35px;
  margin-bottom: -10px;
  margin-bottom: 10px;
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
      margin: 'auto',
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
  width: 100%;
  height: 175px;
  position: absolute;
  bottom: 0;
  background-color: #EFEFEF;
  display: flex;
`;

const BottomImage = styled.img`
  height: 140px;
  width: 100px;
  object-fit: cover;
  margin: 20px;
  flex-grow: 1;
`;

const BottomItemWrapper = styled.div`
  flex-grow: 1;
  margin: 10px;
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
  const dispatch = useDispatch();
  return (
    <SideMenuWrapper>
      <CloseIconWrapper>
        <HighlightOffIcon className="float-right" fontSize="large" onClick={() => { dispatch(closeMenu()); }} />
      </CloseIconWrapper>

      <AccordionWrapper>
        {menuData.map(item => (
          <Accordion square>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
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

      <BottomWrapper>
        <BottomImage src={heroImage} />
        <BottomItemWrapper>
          {botItems.map(item => (
            <SubCatText className="text-subtitle">{item}</SubCatText>
          ))}
        </BottomItemWrapper>
      </BottomWrapper>
    </SideMenuWrapper>
  );
};

export default SideMenu;
