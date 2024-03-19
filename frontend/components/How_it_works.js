'use client';
import React from 'react';
import Kuva from "../../pictures/di_an_h-g_8MrEZAvyE-unsplash.jpg";
import Kuva2 from "../../pictures/kam-idris-_HqHX3LBN18-unsplash.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import HowCard from './HowCard';

const pStyle = {
    fontSize: '20px',
    whiteSpace: 'normal',
    overflow: 'hidden'

};
const bStyle = {
    fontSize: '30px',
    whiteSpace: 'nowrap',
};

export default function How_it_works() {
    return (
        <div className="container">
            <HowCard
                title={"Title"}
                content={"This is the content, lorem ipsum etc"}
                image={Kuva} />
            <HowCard
                title={"Title"}
                content={"This is the content, lorem ipsum etc"}
                image={Kuva} />
            <HowCard
                title={"Title"}
                content={"This is the content, lorem ipsum etc"}
                image={Kuva} />
            <HowCard
                title={"Title"}
                content={"This is the content, lorem ipsum etc"}
                image={Kuva} />
            <HowCard
                title={"Title"}
                content={"This is the content, lorem ipsum etc"}
                image={Kuva} />
        </div>
    );
}
