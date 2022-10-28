import { ActionIcon, Button, Group, Menu, Text, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { NextLink } from '@mantine/next';
import { IconMoonStars, IconSun } from '@tabler/icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;


    return (
        <header className="flex items-center my-5">
            <nav className="flex md:space-x-4 items-center flex-col md:flex-row space-y-4 md:space-y-0 text-xl sm:text-base">
                <NextLink href="/shows">
                    <span className="dark:text-gray-300  dark:hover:text-white text-gray-600 hover:text-gray-900 font-semibold">
                        TV Shows
                    </span>
                </NextLink>
                <NextLink href="/shows">
                    <span className="dark:text-gray-300  dark:hover:text-white text-gray-600 hover:text-gray-900 font-semibold">
                        TV Shows
                    </span>
                </NextLink>
            </nav>

            <ActionIcon
                onClick={() => {
                    toggleColorScheme()
                    setTheme(theme === 'light' ? 'dark' : 'light')
                }
                }
                size="lg"
                className="border border-gray-300"
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                })}
            >
                {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
        </header >
    )
}
export default Header