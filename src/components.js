import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 20px;
    position: relative;
    &:before {
        top: 0;
        bottom: 0;
        position: absolute;
        content: " ";
        width: 3px;
        background-color: #dbdbdb;
        margin-left: -1.5px;
    }
        > li {
          margin-bottom: 20px;
          position: relative;
          &:before {
            content: " ";
            display: table;
          }
          &:after {
            content: " ";
            display: table;
            clear: both;
          }
          &:before {
            content: " ";
            display: table;
          }
          &:after {
            content: " ";
            display: table;
            clear: both;
          }
          > {
            .timeline-panel {
              width: 45%;
              float: left;
              border: 1px solid #ffffff;
              border-radius: 10px;
              position: relative;
              margin: 0;
              padding: 0;
              -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.175);
              box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
              &:before {
                position: absolute;
                top: 12px;
                right: -20px;
                display: inline-block;
                border-top: 10px solid transparent;
                border-left: 7px solid #ccc;
                border-right: 0 solid #ccc;
                border-bottom: 10px solid transparent;
                content: " ";
              }
              &:after {
                position: absolute;
                top: 12px;
                right: -19px;
                display: inline-block;
                border-top: 9px solid transparent;
                border-left: 6px solid #fff;
                border-right: 0 solid #fff;
                border-bottom: 9px solid transparent;
                content: " ";
              }
            }
            .timeline-badge {
              color: #fff;
              width: 30px;
              height: 30px;
              font-size: 1.4em;
              text-align: center;
              position: absolute;
              top: 8px;
              margin-left: -15px;
              z-index: 100;
              > img {
                height: 100%;
              }
            }
          }
          &.timeline-left > .timeline-panel {
            left: 5%;
            &:before {
              border-left-width: 0;
              border-right-width: 15px;
              left: -15px;
              right: auto;
            }
            &:after {
              border-left-width: 0;
              border-right-width: 14px;
              left: -14px;
              right: auto;
            }
          }
        }
    `;

const Header = styled.div`
    padding: 10px 30px 10px 30px;
    min-height: 40px;
    background-color: white;
    -webkit-border-top-left-radius: 10px;
    -webkit-border-top-right-radius: 10px;
    -moz-border-radius-topleft: 10px;
    -moz-border-radius-topright: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    > div {
      > img {
        height: 15px;
        margin-right: 5px;
      }
      width: 25%;
      display: inline-table;
      vertical-align: middle;
    }
`;

const Body = styled.div`
    .timeline-body {
    background-color: #F8F8F8;
    height: 100%;
    padding-left: 30px;
    padding-right: 30px;
    -webkit-border-bottom-right-radius: 10px;
    -webkit-border-bottom-left-radius: 10px;
    -moz-border-radius-bottomright: 10px;
    -moz-border-radius-bottomleft: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

const Table = styled.table`
    width: 100%;
    margin-bottom: 3%;
    thead > tr > th {
      border-bottom: none;
      padding: 8px 8px 8px 0px;
    }
    tbody > tr > td {
      padding: 8px 8px 8px 0px;
      border-top: 2px solid #f2f2f2;
    }
`;

export {
    List,
    Header,
    Body,
    Table
}