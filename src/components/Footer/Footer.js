import React from 'react';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useWindowSize } from '../../hooks';

import instagramIcon from '../../assets/instagram.svg';
import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter.svg';

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
    backgroundColor: 'black',
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    padding: '0px',
    color: 'white !important',
    backgroundColor: 'black',
    minHeight: 50,
    '&$expanded': {
      minHeight: 50,
    },
  },
  content: {
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
  root: {
    padding: '0px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
  },
}))(MuiAccordionDetails);

const Wrapper = styled.div`
  background-color: black;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  ${({ isMobile }) => isMobile && `
  padding: 20px;
    flex-direction: column;
  `}
`;

const AccordionWrapper = styled.div`
  margin-top: -10px;
  margin-bottom: 10px;
  display: flex;
  column-gap: 90px;
  align-items: flex-start;
  ${({ isMobile }) => isMobile && `
    flex-direction: column;
  `}
`;

const IconWrapper = styled.div`
  margin-left: -10px;
  display: flex;
  column-gap: 10px;
`;

const FollowUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = () => {
  const size = useWindowSize();

  const isMobile = size.width < 1024;

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    if (isMobile) { setExpanded(newExpanded ? panel : false); }
  };

  const panels = [
    {
      id: 'panel1',
      title: 'Customer Service',
      entries: [
        'Accessibility',
        'Contact Us',
        'Return Policy',
        'FAQ',
        'Gift Certificates',
        'Wishlist',
      ],
    },
    {
      id: 'panel2',
      title: 'Company',
      entries: [
        'About Us',
        'Careers',
        'Press',
        'Affiliates',
      ],
    },
  ];

  return (
    <Wrapper isMobile={isMobile}>
      <AccordionWrapper isMobile={isMobile}>
        {panels.map(item => (
          <Accordion square expanded={isMobile ? expanded === item.id : true} onChange={handleChange(item.id)}>
            <AccordionSummary
              expandIcon={isMobile ? (expanded === item.id ? <RemoveIcon className="color-white" /> : <AddIcon className="color-white" />) : null}
            >
              <div className="text-title">{item.title}</div>
            </AccordionSummary>
            <AccordionDetails>
              {
                  item.entries.map(entry => (
                    <div className="text-subtitle">{entry}</div>
                  ))
                }
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionWrapper>
      <FollowUsWrapper>
        <div className="text-title color-white">Follow Us</div>
        <IconWrapper>
          <img className="icon" src={facebookIcon} />
          <img className="icon" src={instagramIcon} />
          <img className="icon" src={twitterIcon} />
        </IconWrapper>
      </FollowUsWrapper>
    </Wrapper>
  );
};

export default Footer;
