import {AppBar, Drawer, List, ListItem, Toolbar, Typography} from '@mui/material';
import {Theme, useTheme} from '@mui/material/styles';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import home from '../home.tsx';
import about from '../about.tsx';

const drawerWidth = 240;

const themedStyles = (theme: Theme) => {
    return {
        appBar: {
            // adjust zIndex (default 1200) so the draw component is not on top of the app bar.
            zIndex: theme.zIndex.drawer + 1,
        },
        toolbar: {
            backgroundColor: 'hsl(199, 19%, 26%)',
        },
        drawer: {
            width: drawerWidth,
            '& .MuiBackdrop-root': {
                display: 'none',
            },
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: 'hsl(197, 20%, 18%)',
        },
        content: {
            marginLeft: drawerWidth,
            padding: 3,
        },
    };

};
const styles = {
    toolbar: {
        backgroundColor: 'hsl(199, 19%, 26%)',
    },
    drawer: {
        width: drawerWidth,
        '& .MuiBackdrop-root': {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'hsl(197, 20%, 18%)',
    },
    content: {
        marginLeft: drawerWidth,
        padding: 3,
    },
};

export default function NavDrawer() {
    const theme = useTheme();
    return (
        <BrowserRouter>
            <div>
                {/* sx is a new prop in mui 5.
                It's a bit like style property that applies style vial inline styling in the DOM,
                however, sx injects style into the classes that are being rendered within the appBar*/}
                <AppBar position={'fixed'} sx={themedStyles(theme).appBar}>
                    {/*A toolbar is partly a vertical spacer and is supposed to have children inside it*/}
                    <Toolbar
                        sx={styles.toolbar}>
                        {/*Typography is pretty much a fancy way to wrap your text and get a lot of default styling on it.*/}
                        <Typography variant="h6" noWrap>
                            Odyssey
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    // The temporary is used for mobile responsive so the draw can be closed or disappeared
                    variant="temporary"
                    open={true}
                    sx={styles.drawer}
                    PaperProps={{
                        sx: styles.drawerPaper,
                        elevation: 9, // Box shadow
                    }}>
                    {/*Add a toolbar to push content down*/}
                    <Toolbar/>
                    <List>
                        {[{text: 'Home', to: '/'},
                            {text: 'Users', to: '/users'},
                            {text: 'About', to: '/about'}
                        ].map((nav) => (
                            <ListItem key={nav.text}><Link to={nav.to}>{nav.text}</Link></ListItem>
                        ))}
                    </List>
                </Drawer>
                <main style={styles.content}>
                    {/*Add a toolbar to push content down*/}
                    <Toolbar/>
                    <Routes>
                        <Route path="/" element={home()}/>
                        <Route path="/about" element={about()}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}