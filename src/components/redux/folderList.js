import React, { Component } from React;
import { connect } from 'react-redux';
import Folder from './Folder';
import { addFolder } from '../redux/folderActions'
import { Button } from 'sandstone/Button';
import { VirtualGridList } from 'sandstone/VirtualList'

class FolderList extends Component {
   handleAddFolder = () => {
      const FolderName = 'Folder ${this.props.folders.length+1}';
      this.props.addFolder(FolderName);
   }

   renderItem = ({ index, ...rest }) => {
      const { folders } = this.props;
      return <Folder key={index} name={folders[index]} {...rest} />;

   }
   render() {
      return (
         <div>
            <Button onClick={this.handleAddFolder}>Add Folder </Button>
            <VirtualGridList
               dataSize={this.props.folders.length}
               itemRenderer={this.renderItem}
               itemSize={{
                  midWidth: 300,
                  midHeight: 200
               }}
            />
         </div>
      );
   }



   const mapStateToProps = (state) => {
      return {
         folders: state.folder.folders
      }
   };
   const mapDispatchToProps = { 
      addFolder
   };

};

export default connect(mapStateToProps, mapDispatchToProps)(FolderList);

