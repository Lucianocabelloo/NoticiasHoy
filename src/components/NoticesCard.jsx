import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import { Button, CardContent, CardOverflow } from '@mui/joy';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';


export default function NoticesCard({notice}) {

    const MAX_DESCRIPTION_LENGTH = 120; // Establece la longitud máxima deseada

    const truncatedDescription =
      notice.description.length > 150
        ? `${notice.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
        : notice.description;
    const truncatedtitle =
      notice.title.length > 50
        ? `${notice.title.substring(0, 40)}...`
        : notice.title;

    
  
  return (
    <Box className="css-n7pinj" sx={{ minHeight: 350 }}>
      <Card
        variant="soft"
        color='neutral'
        size="lg"
        className="notices-card"

        sx={(theme) => ({
          width: 300,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          resize: 'horizontal',
          overflow: 'hidden',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.3s, border 0.3s',
          '&:hover': {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: 'translateY(-2px)',
          },
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        })}
      >

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <div>
              <Typography level="title-lg">
                <Link
                  href="#container-responsive"
                  overlay
                  underline="none"
                  sx={{
                    color: 'text.primary',
                    '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                  }}
                >
                  {truncatedtitle}
                </Link>
              </Typography>
              <Typography level="body-sm">{notice.creator || <h2>Creator not available</h2>}</Typography>
            </div>
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              sx={{ ml: 'auto', alignSelf: 'flex-start' }}
            >
              <FavoriteBorderRoundedIcon color="danger" />
            </IconButton>
          </Box>
          <AspectRatio
            variant="soft"
            sx={{
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
              pointerEvents: 'none',
            }}
          >
            <img
              alt=""
              src={notice.image_url}
            />
          </AspectRatio>
          <CardContent>
        <Typography level="title-lg">NYC Coders</Typography>
        <Typography level="body-sm">
            {truncatedDescription}
        </Typography>
        <CardOverflow>
        <Button     onClick={() => window.open(notice.link, '_blank')} variant="solid" color="danger" size="lg">
            
          Leer Noticia Completa
        </Button>
      </CardOverflow>
      </CardContent>
        </Box>
      </Card>
    </Box>
  );
}