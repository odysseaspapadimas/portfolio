import { ActionIcon, Burger, Button, ColorScheme, Drawer, Group, Menu, Text, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { IconMoonStars, IconSun } from '@tabler/icons';
import { useTheme } from 'next-themes';
import { useState } from 'react';

const Header = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const { theme, setTheme } = useTheme();

    const [isMenuOpened, setMenuOpened] = useState(false);

    const isDesktop = useMediaQuery("(min-width: 768px)", true, { getInitialValueInEffect: true });

    const ToggleTheme = () => (
        <ActionIcon
            onClick={() => {
                toggleColorScheme()
                setTheme(theme === 'light' ? 'dark' : 'light')
            }
            }
            size="lg"
            className="border border-gray-300 ml-auto"
            sx={(theme) => ({
                backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
            })}
        >
            {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
    )

    return (
        <div className="flex items-center " style={{ height: 70 }}>
            {isDesktop ? (
                <>
                    <NavLinks theme={colorScheme} />

                    <ToggleTheme />
                </>
            ) : (
                <>
                    <Burger style={{ zIndex: 201 }} opened={isMenuOpened} onClick={() => setMenuOpened((o) => !o)} />
                    <Drawer
                        opened={isMenuOpened}
                        onClose={() => setMenuOpened(false)}
                        onClick={() => setMenuOpened(false)}
                        withCloseButton={false}
                        closeOnClickOutside
                        padding="xl"
                        size="100%"
                    >
                        <NavLinks theme={colorScheme} />

                        <ToggleTheme />
                    </Drawer>
                </>
            )}
        </div >
    )
}
export default Header

const NavLinks = ({ theme }: { theme: ColorScheme }) => (
    <div className="flex md:space-x-4 items-center flex-col md:flex-row space-y-4 md:space-y-0 text-xl sm:text-base">
        <NextLink href="/">
            <Button variant="subtle" styles={{label: {fontSize: '1rem'}}} color={theme === "dark" ? "gray" : "dark"}>Home</Button>
        </NextLink>
        <NextLink href="/blog">
            <Button variant="subtle" styles={{label: {fontSize: '1rem'}}} color={theme === "dark" ? "gray" : "dark"}>Blog</Button>
        </NextLink >
    </div>
)